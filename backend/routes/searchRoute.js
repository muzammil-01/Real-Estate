const express = require('express')
const Property = require ('../models/Property')
const router = express.Router()

router.get("/:key",async(req,res) =>{
    let result = await Property.find({
        "$or":[
            {propertyAddress: { $regex: req.params.key}},
            {country: { $regex: req.params.key}},
            {city: { $regex: req.params.key}}
        ]
    });
    res.send(result)
})
module.exports = router