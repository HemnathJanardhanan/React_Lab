import express ,{Request,Response}from 'express';
import dbconnect from './config/db';
import Item from './models/items'
import cors from 'cors';
dbconnect();

const app=express();
app.use(cors())
app.use(express.json())

const getAllItems=async (req:Request,res:Response)=>{
    const items=await Item.find();
    res.status(200).json(items);


}

const addItem=async(req:Request,res:Response)=>{
    // let obj={name:req.body.name,quantity:req.body.quantity,isChecked:req.body.isChecked}
    const newItem= new Item(req.body);
    await newItem.save( )
    console.log("Item Added Successfully")
    res.status(201).json(newItem);
}



const changeChecked=async(req:Request,res:Response)=>{
    const {id}=req.params;
    let item=await Item.findOneAndUpdate({_id:id},{isChecked:true},{new:true})
    console.log(item)
    res.status(200).json(item)

}



// Get All Item List
app.get('/',getAllItems)
//Add Item to list
app.post('/',addItem)
//Change the Checked for Item with itemID ID
app.put('/:id',changeChecked)

app.listen(3000,()=>console.log(`App listening at http://localhost:3000/`))