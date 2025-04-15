import React ,{useEffect, useState}from 'react'
import { Button } from '../components/ui/button';
import { Link,useNavigate} from 'react-router-dom';

import {
    Card,
    CardContent
  } from "@/components/ui/card"
  

import axios from 'axios';



function HeroSection(){
    return (
        <div className='flex flex-col justify-center items-center h-80 space-y-6 text-center bg-blue-300'>
            <div className='w-3/4'>
                <h1 className='text-6xl'>Weldome to Memora</h1>
            </div>
            <div className='w-1/2 flex flex-row justify-center'>
                <Button variant='default' className="px-9 py-9 rounded-xl text-3xl hover:shadow-2xl transition-shadow duration-300">
                    <Link to='/CreateDeck'>Create Deck</Link>    
                </Button>
            </div>
            
        </div>
    );
}

function DeckCard(props){
    const navigate=useNavigate();
    return(
       
            <Card className='w-100 h-60 shadow-lg hover:shadow-2xl tansition-shadow duration-300 bg-white flex felx-col items-center justify-center'>
                <CardContent className='flex flex-col h-full w-full justify-center items-center'>
                    {/* <div className='flex flex-row justify-center items-center '> */}
                        <h3 className='text-3xl text-center m-5'>{props.deckname}</h3>

                        <div className='flex flex-row space-x-7'>
                            <Button onClick={()=>{navigate(`/deck/${props.id}`)}} className='text-2xl px-6 py-6'>View</Button>
                            <Button onClick={()=>{navigate(`/Play/${props.id}`)}} className='text-2xl px-6 py-6'>Play</Button>
                        </div>                       
                    {/* </div> */}
                </CardContent>
            </Card>
            
       
    );
}

function HomePage() {
    let [decks,setDecks]=useState([]);
    
    useEffect(() => {
        const fetchDecks = async () => {
          try {
            const response = await axios.get('http://localhost:3000/decks');
            setDecks(response.data);
          } catch (err) {
            console.error('Failed to load decks:', err);
          }
        };
    
        fetchDecks();
      }, []);
    
    
  return (
    <div className=''>
        <HeroSection/>

        <h1 className='m-5 mx-6 sm:mx-12 md:mx-20 lg:mx-25'>My Decks</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {
            decks.map((deck)=>{
                return(
                    <div className='flex flex-row justify-center'>
                        <DeckCard id={deck._id} deckname={deck.deckName}/>
                    </div>
                );
            })
        }

        </div>
    </div>
  )
}

export default HomePage