const jwt = require("jsonwebtoken");
const Resource = require("../models/resource");

exports.createResource = (req, res, next) => {
    const resource = new Resource({
        title: req.body.title,
        data: req.body.data// entries: Array<object> in POST Requst Body
    })
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
}

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

// exports.userLogin = (req, res, next) => {
//   let fetchedUser;
//   User.findOne({ email: req.body.email })
//     .then(user => {
//       if (!user) {
//         return res.status(401).json({
//           message: "Auth failed"
//           // user not found
//         });
//       }
//       fetchedUser = user;
//       return bcrypt.compare(req.body.password, user.password);
//     })
//     .then(result => {
//       if (!result) {
//         return res.status(401).json({
//           message: "Auth failed"
//           // no result
//         });
//       }
//       const token = jwt.sign(
//         { email: fetchedUser.email, userId: fetchedUser._id },
//         process.env.JWT_KEY,
//         { expiresIn: "1h" }
//       );
//       res.status(200).json({
//         token: token,
//         expiresIn: 3600,
//         userId: fetchedUser._id
//       });
//     })
//     .catch(err => {
//       return res.status(401).json({
//         message: "Invalid authentication credentials!"
//         // problem occurs when generating or sending jwt to frontend
//       });
//     });
// }
