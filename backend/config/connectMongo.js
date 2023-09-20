const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    const DB_URI = process.env.MONGODB_URI;
    await mongoose.connect(DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('**** Conexión exitosa a MongoDB ****');
  } catch (err) {
    console.error('**** Falla en la conexión a MongoDB ****', err);
  }
};

module.exports = dbConnect;
