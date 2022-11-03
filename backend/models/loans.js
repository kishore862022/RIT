import mongoose  from "mongoose";

const loanSchema = new mongoose.Schema({
    loanTitle:{
        type:String,
        required:true
    },
    loanType:{
        type:String,
        required:true
    },
    loanStatus:{
        type:Boolean,
        default:false
    },
    loanIssueDate:{
        type:Date,
        required:true
    },
    loanAmount:{
        type:Number,
        required:true
    },
})

const loanModal = mongoose.model('Loans',loanSchema)

export default loanModal;