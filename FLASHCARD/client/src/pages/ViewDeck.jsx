import React,{useState,useEffect} from 'react'
import FlashCard from '../components/custom/FlashCard'
import { useParams } from 'react-router-dom';
import axios from 'axios';
function ViewDeck() {
    let [decks,setDecks]=useState([]);
    let [flashcards,setFlashcards]=useState([]);

    let {DeckId}=useParams();
    
    
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
    
    
    useEffect(()=>{
        if (decks.length > 0) { 
            let deck=decks.find((deck)=>deck._id===DeckId);
            setFlashcards(deck.flashCards);
        }
    },[decks,DeckId])
    
  return (
    <div className='m-10 flex flex-col items-center' >
        <h2>FlashCards</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-9 mt-9'>
            {
                flashcards.map((flashcard)=>{
                                    
                    return(
                        <><FlashCard fid={flashcard.fid} question={flashcard.question} answer={flashcard.answer}/></>
                    )
                })
            }
        </div>
    </div>

  )
}

export default ViewDeck