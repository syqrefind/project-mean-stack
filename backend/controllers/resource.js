// const jwt = require("jsonwebtoken");
const Resource = require("../models/resource");

exports.createResource = (req, res, next) => {
    const resource = new Resource({
        title: req.body.title,
        data: req.body.data,
    });
    console.log(resource);
    resource.save().then(result => {
        // console.log(result);
        res.status(201).json({
            message: "Resource created!",
            result: result
        })
    }).catch(err => {
        res.status(500).json({
            message: "Resouce Creation FAILED!!!",
        })
    })
}

// Please dont't use this after the GET handler is done.
exports.readResource = (req, res, next) =>{

    let fetchedResource;
    Resource.findOne({title: req.body.title}).then(resource => {
        if (!resource){
            return res.status(404).json({
                message: "Could not find the document!!!",
            });
        }

        fetchedResource = resource;
        
        return res.status(200).json({
            message: "Document found.",
            data: resource.data,
        });
    }).catch(err => {
        return res.status(404).json({
            message: "Oops! Data lost in the void",
        })
    });
}

exports.readResourceViaGet = (req, res, next) =>{
    let start = parseInt(req.params.start);
    let end = parseInt(req.params.end);
    console.log(`start is ${start} & end is ${end}`);
    
    if (start < 0 || start > end || end > 75){
        return res.status(400).json({
            message: "Bad request: requested indices are out of boundary!"
        });
    }

    let fetchedDocument;
    Resource.findOne({title: 'project0'}).then(document => {
        if (!document){
            return res.status(404).json({
                message: "Could not find the document!!!",
            });
        }

        fetchedDocument = document;
        // return res.status(200).json({
        //     message: "Document found.",
        //     data: document.data,
        // });
        let data = document.data;
        let selectedData = [];

        for (let i = start; i < end; i++){
            selectedData.push(data[i]);
        }
        return res.status(200).json({
            message: "Array of Data found.",
            data: selectedData
        });
        

    }).catch(err => {
        return res.status(404).json({
            message: "Oops! Document lost in the void.",
        })
    });
}

