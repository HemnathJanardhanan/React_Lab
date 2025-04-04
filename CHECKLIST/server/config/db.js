
import mongoose from 'mongoose';
import dotenv from 'dotenv'
dotenv.config();

const dbconnect=async()=>{

    try{
        const conn=await mongoose.connect(process.env.MONGO_URI);
        console.log("Mongo DB Connected Successfully");
    }
    catch(err){
        console.log(`Error : ${err.message}`)
        process.exit(1);

    }
}

export default dbconnect;