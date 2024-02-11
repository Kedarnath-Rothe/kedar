const {Schema, model, Mongoose} = require('mongoose');

const serviceSchema = new Schema({
    carname : {
        type : String,
        required : true
    },
    price : {
        type : Number,
        required : true
    },
    image : {
        type : String,
        required : true
    }

})
 
const Service = new model("Service", serviceSchema);

module.exports = Service;