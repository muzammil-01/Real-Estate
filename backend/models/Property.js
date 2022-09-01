const mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose);
const { Schema } = mongoose



const PropertyDetailsSchema = new Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    TokenId: {
        type: Number,
    },
    ownerName: {
        type: String,
        required: true,
    },
    PropertyContractAddress: {
        type: String,
    },
    OwnerWalletAddress: {
        type: String,
    },
    propertyAddress: {
        type: String,
        required: true,
    },
    propertyPrice: {
        type: String,
        required: true
    },
    propertyImages:{
        type:Array,
        required:true
    },
    propertyDocuments:{
        type:Array,
        required:true,
    },
    beds: {
        type: String,
        required: true,
    },
    baths: {
        type: String,
        required: true,
    },
    size: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    postalcode: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now
    },
    numberOfSupplies: {
        type: String,
        required: true
    },
},{TokenId: false })

PropertyDetailsSchema.plugin(AutoIncrement,{inc_field: 'TokenId'});
module.exports = mongoose.model('property', PropertyDetailsSchema)
