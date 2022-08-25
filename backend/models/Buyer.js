const mongoose = require('mongoose')
const { Schema } = mongoose


const Buyer = new Schema({

    ListingTokens:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'listingTokens'
    },
    BuyerWalletAddress: {
        type: String,
        required: true,
    },
    quantity:{
        type: String,
        required: true
    }
    
})
module.exports = mongoose.model('buyer', Buyer)
