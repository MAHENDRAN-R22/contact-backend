const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"user"
    },
    username:{
        type:String,
        require:[true,"enter your name"]
    },
    email:{
        type:String,
        require:[true,'enter your email'],
        unique:[true,'Email already exists']
    },
    password:{
        type:String,
        require:[true,'Enter your password']
    }

},{
    timestamps:true
})

module.exports = mongoose.model('User',userSchema);