const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config(); 

const userSchema = mongoose.Schema ( {

    username : {
        type : String,
        required : true,
    },

    email : {
        type : String,
        required : true,
    },

    phone : {
        type : String,
        required : true,
    },


    password : {
        type : String,
        required : true
    },

    isAdmin : {
        type : Boolean,
        default : false
    },

    image : {                         //Image type is string because it stores the adress of images
        type : String,
        required : true
    },

})

 


//json web token  JWT
userSchema.methods.generateToken = function () {                  //To generate token
    try{
        return jwt.sign({
            userId : this._id.toString(),
            email : this.email,
            isAdmin : this.isAdmin
        },
        process.env.JWT_SECRET_KEY,
         {
            expiresIn: "30d"
         }
        )
    }
    catch(error){
        console.log(error.message);
    }
};


const User = new mongoose.model("User", userSchema);

module.exports = User;

 
