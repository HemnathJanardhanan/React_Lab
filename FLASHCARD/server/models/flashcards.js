
import mongoose from 'mongoose';


const FlashCardSchema=new mongoose.Schema({
    question:String,
    answer:String
})

const FlashCard=mongoose.model("FlashCard",FlashCardSchema);

export default FlashCard;