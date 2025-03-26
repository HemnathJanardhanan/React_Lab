import React from 'react'
import { Link } from 'react-router-dom'
import {Button} from '../ui/button'

function NavBar() {
  return (
    <div className='flex flex-row justify-between bg-gray-900 text-white p-4 h-20' >
        <Link to='/' className='text-5xl font-extrabold font-nunito ml-5'>Memora</Link>
        
        <div className='flex flex-row space-x-9 items-center mr-5'>
            <Button variant='link' asChild className="text-3xl text-white">
            <Link to='/'>My Deck</Link>
            </Button>
            <Button onClick={()=>{localStorage.clear()}} className="text-3xl px-6 py-6">
            Logout
            </Button>
            
        </div>
        
    </div>
  )
}

export default NavBar