const { imgModel } = require('../models'); // Importa el archivo images.js desde '../models'


/**
 * Obtener lista de la base de datos!
 * @param {*} req
 * @param {*} res
 */
const getItems = async (req, res) => {
    const data = await imgModel.find({})
    res.send({ data });
}

const createItem = async (req, res) => {
    const { body } = req;
    console.log(body);
    res.send({ algo:1 });
}

module.exports = {
    getItems,
    createItem,
};
