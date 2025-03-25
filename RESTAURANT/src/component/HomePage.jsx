import NavBar from './NavBar';
import React from "react";
import { useState } from 'react';

import { OrderCard,FoodCard } from './FoodCard';
import { Button } from '@/components/ui/button';

function HomePage(){
    let Menu = [
        {   
            id:1,
            name: "Margherita Pizza",
            price: 299,
            ingredients: ["Tomato", "Mozzarella", "Basil"]
        },
        {   
            id:2,
            name: "Chicken Biryani",
            price: 399,
            ingredients: ["Rice", "Chicken", "Spices", "Yogurt"]
        },
        {   
            id:3,
            name: "Caesar Salad",
            price: 199,
            ingredients: ["Lettuce", "Parmesan", "Croutons", "Caesar Dressing"]
        },
        {   
            id:4,
            name: "Sushi Platter",
            price: 599,
            ingredients: ["Rice", "Nori", "Salmon", "Avocado"]
        }
    ];
    
    let [order,setOrder]=useState([]);
    let [amount,setAmount]=useState(0);
    const addItem=(id)=>{
        let food=Menu.find((item)=>{return item.id===id});
        let inOrder=order.findIndex((item)=>(item.id===id))
        if(inOrder===-1){
            food={...food,qty:1}
            setOrder((prev)=>[...prev,food]);
        }else{
            setOrder((prev)=>{
                return prev.map((item,index)=>{
                    return index===inOrder ? {...item,price:food.price*(item.qty+1),qty:item.qty+1}:item;
                })
            });
        }
    }
    const calculateOrder=()=>{
        let total=0;
        for (let i of order){
            total+=i.price;
        }
        setAmount(total);
    }
    return (
        <div className='flex h-screen mt-20 font-sans w-full p-4 text-white'>
            
                <div className='w-1/2 flex flex-col bg-gray-800 rounded-3xl mr-4'>
                    {/* card title */}
                    <div className='flex justify-center pt-3'>
                        <h2 className='font-bold text-2xl'>ADD ITEM</h2>
                    </div>

                    {/* CHOICE */}
                    <div className='flex flex-col mt-4'>
                    {Menu.map((item)=>{
                        return <div>
                            <FoodCard id={item.id} fname={item.name} price={item.price} onClick={addItem}/>
                            
                        </div>
                    })}
                    </div>
                    
                </div>
                <div className='w-1/2 flex flex-col bg-gray-800 rounded-3xl ml-4'>
                    <div className='flex justify-center pt-4'>
                        <h2 className='font-bold text-2xl'>CHECKOUT</h2>
                    </div>
                    <div className='flex flex-col mt-4'>
                        {order.map((item)=>{
                            return <div className='flex flex-col'>
                                <OrderCard id={item.id} fname={item.name} price={item.price} qty={item.qty}/>
                            </div>
                        })}

                        <div className='flex justify-center'>
                            <Button className="text-2xl bg-green-400" onClick={calculateOrder}>Place Order</Button>
                        </div>
                    </div>

                    <br/>

                    <div className='flex flex-col items-end pr-10'>
                        <h2 className='text-2xl font-extrabold'>TOTAL</h2>
                        <h2 className='text-2xl font-extrabold text-green-500'>Rs. {amount}</h2>

                    </div>
                    
                </div>
            
        </div>
    )
}

export default HomePage;
