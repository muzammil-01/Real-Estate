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
    if(result.length === 0){
        return res.send("No Match Found")
    }
    res.send(result)
})
module.exports = router