const { check } = require("express-validator");
const validateResults = require("../utils/handleValidator")

const validatorCreateItem = [
    check("url")
    .exists()
    .notEmpty(),
    check("filename")
    .exists()
    .notEmpty(),
     
     
    (req, res, next) => {
        return validateResults(req, res, next)
    }
];



module.exports = { validatorCreateItem };