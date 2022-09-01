const mongoose = require('mongoose')
const { Schema } = mongoose


const Buyer = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    propertyId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'property'
    },
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
