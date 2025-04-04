
import mongoose from 'mongoose';

const deckSchema=new mongoose.Schema({
    deckName:String,
    flashCards:[{type:mongoose.Schema.Types.ObjectId,ref:'FlashCard'}]
})

const Deck=mongoose.model("Decks",deckSchema);

export default Deck;