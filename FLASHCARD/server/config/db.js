
import mongoose from 'mongoose';
import dotenv from 'dotenv'
dotenv.config();


const dbconnect=()=>{
    try{
        const conn=mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connected Successfully");
    }catch(err){
        console.log(`Error : ${err.message}`);
        process.exit(1);
    }
}

export default dbconnect;