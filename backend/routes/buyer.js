const express = require('express')
var mongoose = require('mongoose');
const Buyer  = require('../models/Buyer')
const fetchuser = require('../middleware/fetchuser');
const router = express.Router()


router.post("/buyerData",fetchuser,async (req,res)=>{
    
    try {
        console.log("hello",req.body)
        const result = await Buyer.find({ 
            
                ListingTokens: mongoose.Types.ObjectId(req.body.ListingTokensId),
                user:req.user.id
            
            })
        if(result.length===0){
            //create new
        buyerData = await Buyer.create({
            user:req.user.id,
            ListingTokens: mongoose.Types.ObjectId(req.body.ListingTokensId),
            propertyId:mongoose.Types.ObjectId(req.body.propertyId),
            BuyerWalletAddress: req.body.BuyerWalletAddress,
            quantity:req.body.quantity
           })
           console.log({buyerData})
           res.json({buyerData})
           
        }else{
            //update doc
            req.body.quantity = parseInt(result[0].quantity) + parseInt(req.body.quantity)
            console.log(result[0]._id)
            const options = {new: true};
            await Buyer.findByIdAndUpdate(result[0]._id, { quantity: `${req.body.quantity}` }, options);
            return res.json("successfully updated")
        }
        
    } catch (error) {
            console.log(error)   
    }

})

router.get("/getbuyerdata", fetchuser, async(req,res)=>{
    try {
        const { ListingTokensId } = req.body;
        let buyer = await Buyer.find({ ListingTokensId})
        console.log({buyer})
        res.json({buyer})
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
    
    
})
router.get("/userTokens", fetchuser, async(req,res)=>{
    try {
        const use = await Buyer.find({ user: req.user.id}).populate('propertyId')
        res.json(use)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})
  
router.patch("/update/:id", async (req, res) => {
    const id = req.params.id
    const listing = await Buyer.findOne({ _id: id });
    var a = parseInt(listing.quantity)

    if (a !== 0) {
        req.body.quantity = a - parseInt(req.body.quantity)
        const options = { new: true };
        await Buyer.findByIdAndUpdate(id, { quantity: `${req.body.quantity}` }, options);
        return res.json("successfully updated")
    }
})

module.exports = router