

const User = require('../models/user-model');
const bcrypt = require('bcryptjs');

const cloudinary = require("../helper/cloudinaryconfig");
const moment = require("moment");

// *-----------------------------
//  Home Logic
// *-----------------------------

const home = async(req, res) => {
    try{
        res.status(200).send("wellcome...");
    }
    catch(error){
        console.log(error.message);
    }
}


// *-----------------------------
//  Registration Logic
// *-----------------------------

const register = async(req,res) => {
    try{  
        // console.log(req.body);
        const upload = await cloudinary.uploader.upload(req.file.path);
        const { username, email, phone, password } = req.body;

        const userExist = await User.findOne({email});

        if(userExist){
            return res.status(400).json({message : "email already exist"});
        }

        //Hash the password
        const saltRound = 10;
        const hash_password = await bcrypt.hash(password, saltRound);

        const userCreated = await User.create({ username, email, phone, image : upload.secure_url, password:hash_password })

        res.status(200).json( { message : "Registration Successful", 
                                token : await userCreated.generateToken(),                                              //Token for authentification
                                userId:userCreated._id.toString()
                            })
    }
    catch(error){
        console.log(error);
        res.status(500).json('Internal server error');
    }
}


// *-----------------------------
//  Login Logic
// *-----------------------------

const login = async (req, res) =>{
    try{
        const {email, password} = req.body;

        const userExist = await User.findOne({email});

        if(!userExist){
            return res.status(400).json({message : "Invalid Credintials"});
        }

        const user = await bcrypt.compare(password, userExist.password);          //check valid password

        if(user){
            res.status(200).json( { message : "Login Successful", 
                                token : await userExist.generateToken(),                                              //Token for authentification
                                userId:userExist._id.toString()
                            })
        }
        else{
            res.status(401).json({message : "Invalid Credintial"});
        }

    }
    catch(error){
        res.status(500).json("internal server error")
    }
}

// *-----------------------------
//  User Logic-To send user Data
// *-----------------------------

const user = async (req, res) => {
    try {
      // const userData = await User.find({});
      const userData = req.user;
      console.log(userData);
      return res.status(200).json({ userData });
    } catch (error) {
      console.log(` error from user route ${error.message}`);
    }
  };




module.exports = {
                home,
                register,
                login,
                user,
            };