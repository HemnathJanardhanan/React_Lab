import React,{useState} from 'react'
import {Input} from '@/components/ui/input'
import {Button} from '@/components/ui/button'
import { Checkbox } from "@/components/ui/checkbox"

function ListCard({item,oncheck}){
  
  return(
    <div className='w-3/4 flex flex-row justify-between items-center text-center p-5'>
      
      <Checkbox onCheckedChange={()=>oncheck(item.id)} checked={item.isChecked}/>
      <h3 className='text-white'>{item.itemName}</h3>
      <h3 className='text-white'>X {item.qty}</h3>
      
    </div>
  )
}


function HomePage() {
  const [list,setList]=useState([]);
  const [itemName,setItemName]=useState('');
  const [qty,setQty]=useState(0);


  const addItemHandler=()=>{
    setList((prev)=>[...prev,{id:Math.floor(Math.random()*100),itemName,qty,isChecked:false}]);
    setItemName('');
    setQty(0);
  }

  const handleChecked=(id)=>{
    setList((prev)=>{return prev.map((item)=>{return item.id===id?{...item,isChecked:true}:item})})
   
  } 



  return (
    <div className='flex flex-col space-y-10 md:flex-row md:space-x-7 px-5 mt-10 pb-20'>
      {/* Add Items */}
      <div className='flex flex-col rounded-2xl w-full md:w-1/2 h-1/2 flex-wrap backdrop-blur-md items center bg-gray-500/10 p-5 border-2 border-emerald-400 shadow-2xl hover:shadow-emerald-400/40'>
        <h2 className='text-gray-200 mt-5 text-center'>Add Items</h2>
        <div className='flex flex-col items-center justify-center p-5 mt-9 space-y-9 '>
        <Input value={itemName} placeholder='Item Name' className='h-15 w-1/2 text-3xl focus:ring-2 border-4 text-white font-nunito' onChange={(e)=>{setItemName(e.target.value)}}/>
        <Input value={qty} placeholder='Quantity' type='number' className='h-15 text-3xl w-1/2 focus:ring-2 border-4 text-white font-nunito' onChange={(e)=>{e.target.value>=0?setQty(e.target.value):null}}/>
        <Button onClick={addItemHandler} className='bg-emerald-400 text-black hover:text-white text-2xl p-6 mt-5'>Add Item</Button>
        </div>
      </div>

      {/* GroceryList */}
      <div className='flex flex-col w-full md:w-1/2 rounded-2xl backdrop-blur-lg bg-gray-500/10 p-5 border-2 border-emerald-400 shadow-2xl hover:shadow-emerald-400/40'>
      <div className='flex flex-row justify-center items center mt-5'> <h2 className='text-gray-200'>Grocery List</h2></div>
      <div className='flex flex-col items-center space-y-9'>
      
      {
        list.map((item)=>{
          return !item.isChecked?<ListCard item={item} oncheck={handleChecked}/>:null
        })
      }
      </div>
      </div>
    </div>
  )
}

export default HomePage