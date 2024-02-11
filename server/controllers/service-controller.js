
const Service = require('../models/service-model');

const services = async(req, res) => {
    try{ 
        const response = await Service.find(); 
        if(!response) {
            res.status(404).json({message : "No service Found"})
            return;
        }  
        // console.log(response);
        return res.status(200).json({msg : "service found", data : response})
    }
    catch(error){
        console.log(error.message); 
    }
}

module.exports = services;