import express from 'express'
const PORT = process.env.PORT || 8080;
import cors from 'cors'
import mongooseConnection from './connection/db.js';
const app = express()

app.use(express.json())
app.use(cors())
mongooseConnection()
app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`)
})