import React from 'react'
import { Button } from "@/components/ui/button"
export function FoodCard(props) {
    
  return (
    <div className='flex flex-row justify-between bg-amber-100  h-25 text-black m-4 p-3 rounded-2xl'>
    <div className='flex flex-col '>
        <h2 className='text-2xl font-extrabold '>{props.fname}</h2>
        <h3 className='text-2xl font-bold  text-green-500'>Rs.{props.price}</h3>                
    </div>
    <div className='flex flex-col justify-center'>
        <Button className="text-2xl bg-blue-400" onClick={()=>{props.onClick(props.id)}}>Add Item</Button>
    </div>
    </div>
  )
}


export function OrderCard(props){
  return (
    <div className='flex flex-row justify-between bg-amber-100  h-15 text-black m-4 p-3 rounded-2xl'>
    
        <h2 className='text-2xl font-extrabold '>{props.fname}</h2>
        <div className='flex flex-row'>
        <p className='text-2xl'>X</p>
        <p className='text-2xl'>{props.qty}</p>
        </div>
        <h3 className='text-2xl text-red-500'>Rs.{props.price}</h3>                
    
    </div>
  )

}
