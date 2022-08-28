const express = require('express')
var mongoose = require('mongoose');
const Buyer  = require('../models/Buyer')
const fetchuser = require('../middleware/fetchuser');
const router = express.Router()


router.post("/buyerData",fetchuser,async (req,res)=>{
    
    try {
        console.log("hello",req.body)
        buyerData = await Buyer.create({
            user:req.user.id,
            ListingTokens: mongoose.Types.ObjectId(req.body.ListingTokensId),
            BuyerWalletAddress: req.body.BuyerWalletAddress,
            quantity:req.body.quantity
           })
           console.log({buyerData})
           res.json({buyerData})
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

module.exports = router