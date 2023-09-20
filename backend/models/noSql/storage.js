const mongoose = require("mongoose");

const StorageSchema = new mongoose.Schema(
  {
     
    url: {
      type: String, // Puedes almacenar la URL de la imagen aquí
       
    },
    filename:{
      type: String
    }
    // Otros campos relacionados con las imágenes, como tamaño, tipo, etc.
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("Storage", StorageSchema);
