const express = require("express");
const router = express.Router();
const multer = require('multer');
 


const storage = multer.diskStorage({
    destination: function (req,file, cb) {
        const pathStorage = `${__dirname}/../storage`;
        cb(null, pathStorage);
    },

    filename: function (req,file, cb) {
        const ext = file.originalname.split(".").pop();
        const filename = `file-${Date.now()}.${ext}`;
        cb(null, filename)
    },
})


const uploadMiddleware = multer({storage});



router.post('/', uploadMiddleware.single('myfile'), (req,res) => {
    res.send({a:1})
});


 

module.exports = router;