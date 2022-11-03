import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()
const url = process.env.MONGO_URL
const mongooseConnection =()=>{
    try {
        mongoose.connect(url)
        console.log('Connected')
    } catch (error) {
        console.log(error)
    }
}

export default mongooseConnection