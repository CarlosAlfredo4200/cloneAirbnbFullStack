const mongoose = require("mongoose");


const UserSchema = new mongoose.Schema(
   
    {
        name: {
            type: String,
            allowNull: false,
        },
         
        email: {
            type: String,
            unique: true,
        },
        password: {
            type: String,
        },
         
    },
    {
        timestamps: true,
        versionKey:false
    }
);
 
module.exports = mongoose.model("users", UserSchema);