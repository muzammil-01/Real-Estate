const express = require('express')
var mongoose = require('mongoose');
const Property = require ('../models/Property')
const ListingTokens = require('../models/ListingTokens')
const {validationResult } = require('express-validator');
const fetchuser = require('../middleware/fetchuser');
const router = express.Router()
const multer = require('multer')



const storage = multer.diskStorage({
    destination:(req, file, cb)=>{
        cb(null,'public/images' )
    },
    filename:(req,file,cb)=>{
        cb(null, file.originalname)
    },
})

const upload = multer({storage})
const Arrayupload =  upload.fields([{name:"propertyImages",maxCount:10},{name:"propertyDocuments",maxCount:10}]) 




// fetch all properties GET /api/property/allproperties
router.get("/allproperties", async(req,res)=>{
    const properties =await Property.find({property:req.body._id})
    res.json(properties)
})

// add property using route '/api/property/check' Auth required
router.post('/check',fetchuser,Arrayupload, async (req, res) => {
    
    // if there are errors return bad request and errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const arrPropertyImages = []
        for(let i = 0 ; i< req.files.propertyImages.length; i++){
            arrPropertyImages.push(req.files.propertyImages[i].originalname)
        }
        const arrPropertyDocuments = []
        for(let i = 0 ; i< req.files.propertyDocuments.length; i++){
            arrPropertyDocuments.push(req.files.propertyDocuments[i].originalname)
        }
        addProperty = await Property.create({
            user:req.user.id,
            ownerName:req.body.ownerName,
            PropertyContractAddress:req.body.PropertyContractAddress,
            OwnerWalletAddress:req.body.OwnerWalletAddress,
            propertyAddress:req.body.propertyAddress,
            propertyPrice:req.body.propertyPrice,
            propertyImages:arrPropertyImages,
            propertyDocuments:arrPropertyDocuments,
            beds:req.body.beds,
            baths:req.body.baths,
            size:req.body.size,
            country:req.body.country,
            city: req.body.city,
            postalcode:req.body.postalcode,
            numberOfSupplies:req.body.numberOfSupplies,
    
            
           })
        console.log({addProperty})

        res.json({ addProperty })
    } catch (error) {
        console.error(error.message)
        res.status(500).send("internal server error")
    }
}) 
 router.post("/checkToken",fetchuser,async (req,res)=>{
    
        try {
            console.log("hello",req.body)
            listing = await ListingTokens.create({
                user:req.user.id,
                propertyId: mongoose.Types.ObjectId(req.body.propertyId),
                SellerWalletAddress:req.body.SellerWalletAddress,
                TotalSupplies:req.body.numberOfSupplies ,
                PricePerToken:req.body.Pricepertoken,
                NumberOfTokenPerWallet:req.body.numberOfTokenPerWallet,
               })
               console.log({listing})
               res.json({listing})
        } catch (error) {
                console.log(error)   
        }
 })
// fetch all user specific properties GET /api/property/userproperties
router.get("/userproperties", fetchuser, async(req,res)=>{
    try {
        const use = await Property.find({ user: req.user.id})
        res.json(use)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
    
    
})
// fetch all properties by id GET /api/property/:id
router.get("/:id", async(req, res)=>{
    try{
        const listing = await ListingTokens.find({ propertyId: req.params.id}).populate('propertyId');
        return res.json(listing)
    }catch(e){
        return res.status(404).json('Product not found')
    }
    
    
    
})
module.exports = router