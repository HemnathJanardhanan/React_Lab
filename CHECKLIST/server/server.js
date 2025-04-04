import express from 'express';
import dbconnect from './config/db.js';
import Item from './models/items.js'

dbconnect();

const app=express();
app.use(express.json())

const getAllItems=async (req,res)=>{
    const items=await Item.find();
    res.json(items);


}

const addItem=async(req,res)=>{
    const newItem= new Item(req.body)
    await newItem.save( )
    console.log("Created Successfully")
    res.status(201).json(newItem);
}


// Get All Item List
app.get('/',getAllItems)


//Add Item to list
app.post('/',addItem)

app.listen(3000,()=>console.log(`App listening at http://localhost:3000/`))