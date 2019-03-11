// const jwt = require("jsonwebtoken");
const Resource = require("../models/resource");

// WORKING
exports.createObject = (req, res, next) => {
    // Body: title, new_object
    let fetchedDocument;
    Resource.findOne({title: req.body.title}).then(document => {
        if (!document){
            return res.status(404).json({
                message: "Could not find the document!!!",
            });
        } 
        fetchedDocument = document;
        // add new_object
        let newData = fetchedDocument.data;
        // check if object format is correct
        newData.push(req.body.new_object);
        // console.log(fetchedDocument.data);
        // console.log(newData);
        const newDocument = new Resource({
            title: fetchedDocument.title,
            data: newData,
            _id: fetchedDocument._id
        });
        Resource.updateOne({title: req.body.title}, newDocument)
            .then(result => {
                if (result.n > 0) {
                    res.status(200).json({ message: "Created successful!" });
                    // console.log(newDocument);
                } else {
                    res.status(401).json({ message: "Not authorized!" });
                }
            });
    });
};

// WORKING
exports.createResource = (req, res, next) => {
    // Body: title, data, new_object 
    const resource = new Resource({
        title: req.body.title,
        data: req.body.data,
        // new_object: req.body.new_object
    });
    // console.log(resource);
    resource.save().then(result => {
        res.status(201).json({
            message: "Resource created!",
            result: result
        })
    }).catch(err => {
        res.status(500).json({
            message: "Resouce Creation FAILED!!!",
        })
    })
};


// :title.:start-:end
exports.readResource= (req, res, next) =>{
    let start = parseInt(req.params.start);
    let end = parseInt(req.params.end);

    console.log(`title is ${req.params.title} start is ${start} & end is ${end}`);
    
    if (start < 0 || start > end || end > 75){
        return res.status(400).json({
            message: "Bad request: requested indices are out of boundary!"
        });
    }

    let fetchedDocument;
    Resource.findOne({title: req.params.title}).then(document => {
        if (!document){
            return res.status(404).json({
                message: "Could not find the document!!!",
            });
        }

        fetchedDocument = document;
        
        let data = fetchedDocument.data;
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
};


// WORKING
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
};

// WORKING
exports.updateResource = (req, res, next) => {
    // Body: title, index, new_object
    const index = req.body.index;
    console.log('get requested!');
    
    let fetchedDocument;
    Resource.findOne({title: req.body.title}).then(document => {
        if (!document){
            return res.status(404).json({
                message: "Could not find the document!!!",
            });
        }
        fetchedDocument = document;
        console.log('document fetched!')
        // update data with given index
        let newData = fetchedDocument.data;
        newData[index] = req.body.new_object;
        console.log('newData is' + newData);
        const newDocument = new Resource({
            title: req.body.title,
            data: newData,
            _id: fetchedDocument._id
        });
        Resource.updateOne({title: req.body.title}, newDocument)
            .then(result => {
                if (result.n > 0) {
                    res.status(200).json({ message: "Update successful!" });
                } else {
                    res.status(401).json({ message: "Not authorized!" });
                }
            });
    });
  };

// WORKING
exports.deleteResource = (req, res, next) =>{
    // Body: title, index
    const index = req.body.index;

    let fetchedDocument;
    Resource.findOne({title: req.body.title}).then(document=> {
        if (!document){
            return res.status(404).json({
                message: "Could not find the document!!!",
            });
        }

        fetchedDocument = document;
        console.log(fetchedDocument.data[75]);

        // console.log(fetchedDocument.data[index]);

        if(!fetchedDocument.data[index]){
            return res.status(404).json({
                message: "Could not find the object!",
            });
        }
        let newData = fetchedDocument.data;
        newData.splice(index, 1);
        const newDocument = new Resource({
            title: req.body.title,
            data: newData,
            _id: fetchedDocument._id
        });
        Resource.updateOne({title: req.body.title}, newDocument)
            .then(result => {
                if (result.n > 0) {
                    res.status(200).json({ message: "Delete successful!" });
                } else {
                    res.status(401).json({ message: "Not authorized!" });
                }
            });
        
    }).catch(err => {
        return res.status(404).json({
            message: "Oops! Unexpected Error",
        })
    });
};
