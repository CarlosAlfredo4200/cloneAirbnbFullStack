const { storageModel } = require('../models'); // Importa el archivo images.js desde '../models'
const PUBLIC_URI = process.env.PUBLIC_URI;
/**
 * Obtener lista de la base de datos!
 * @param {*} req
 * @param {*} res
 */
const getItems = async (req, res) => {
    const data = await storageModel.find({})
    res.send({ data });
}

const createItem = async (req, res) => {

    const { body, file} = req;
     
    const fileData = {
        filename: file.filename,
        url:`${PUBLIC_URI}/filename`

    }
    
    const data = await storageModel.create(fileData);

    res.send({ data });
}

module.exports = {
    getItems,
    createItem,
};


