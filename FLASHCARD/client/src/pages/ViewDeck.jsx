import React,{useState,useEffect} from 'react'
import FlashCard from '../components/custom/FlashCard'
import { useParams } from 'react-router-dom';

function ViewDeck() {
    let [decks,setDecks]=useState([]);
    let [flashcards,setFlashcards]=useState([]);

    let {DeckId}=useParams();
    let id=Number(DeckId);
    useEffect(()=>{
            
            const storedDecks=localStorage.getItem('decks');
            console.log(storedDecks)
            if(storedDecks){

                setDecks(JSON.parse(storedDecks));
            }else {
                fetch("/decks.json")
                  .then((res) => res.json())
                  .then((data) => {
                    
                    setDecks(data);
                    localStorage.setItem("decks", JSON.stringify(data)); // Save initially
                  })
                  .catch((error) => console.error("Error loading decks:", error));
              }
        },[])
    
    useEffect(()=>{
        if (decks.length > 0) { 
            let deck=decks.find((deck)=>deck.id===id);
            setFlashcards(deck.flashcards);
        }
    },[decks,id])
    
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