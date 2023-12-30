const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
    name:{
        type:String,
        require:[true,'please enter the name']
    },
    email:{
        type:String,
        require:[true,'please enter the email']
    },
    number:{
        type:Number,
        require:[true,'please enter the number']
    }
},{
    timestamps:true
})

module.exports = mongoose.model('Contact',contactSchema)