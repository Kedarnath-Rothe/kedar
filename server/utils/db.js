

require('dotenv').config(); 
const mongoose = require('mongoose');

// const URL = 'mongodb://127.0.0.1:27017/mern_admin';

//OUzOkUi83YK3uXuz   pass

// const URI = process.env.MONGODB_URI;
// const URI = 'mongodb+srv://kedarrothe05:OUzOkUi83YK3uXuz@cluster0.a9qruto.mongodb.net/mern_admin?retryWrites=true&w=majority';


const connectDB = async() => {
    try{ 
        await mongoose.connect(process.env.MONGODB_URI);
        // await mongoose.connect('mongodb://127.0.0.1:27017/okk');
        console.log("Connection successful to DB");
    }
    catch(error){
        console.log(error.message);
        console.error("database connection failed");
        process.exit(0);
    }
};

module.exports = connectDB;

