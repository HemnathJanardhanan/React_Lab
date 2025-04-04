
import mongoose from 'mongoose';

const itemSchema=new mongoose.Schema({
    name:String,
    quantity:Number,
    isChecked:Boolean
})

const Item=mongoose.model("Item",itemSchema)
export default Item