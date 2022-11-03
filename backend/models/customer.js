import mongoose  from "mongoose";

const customerSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    dob:{
        type:String,
        required:true
    },
    mobile:{
        type:Number,
        required:true
    },
},{timestamps:true})

const customerModal = mongoose.model('Customer',customerSchema)

export default customerModal;