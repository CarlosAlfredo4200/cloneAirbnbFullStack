const mongoose = require("mongoose");

const ImageSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    imageUrl: {
      type: String, // Puedes almacenar la URL de la imagen aquí
      required: true,
    },
    // Otros campos relacionados con las imágenes, como tamaño, tipo, etc.
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("Image", ImageSchema);
