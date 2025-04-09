
import mongoose from 'mongoose';
import dotenv from 'dotenv'
dotenv.config();

const dbconnect=async()=>{
    const url=process.env.MONGO_URI;
    if(!url) throw new Error('MONGO_URL is not defined in the environment variables');
    
    try{
        const conn=await mongoose.connect(url);
        console.log("Mongo DB Connected Successfully");
    }
    catch(err:any){
        console.log(`Error : ${err.message}`)
        process.exit(1);

    }
}


export default dbconnect;