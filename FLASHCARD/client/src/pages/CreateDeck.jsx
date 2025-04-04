import React, { useEffect ,useState} from 'react'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import FlashCard from '../components/custom/FlashCard'




function CreateDeck() {

    let [deckId,setDeckId]=useState(0);
    let [deckName,setdeckName]=useState('');
    let [newdeck,setNewDeck]=useState({id:deckId,deckName,flashcards:[]});
    let [decks,setDecks]=useState([]);
    let [isCreated,setIsCreated]=useState(false);
    
    let [question, setQuestion]=useState('');
    let [answer, setAnswer]=useState('');
    
    



    useEffect(()=>{
        
        const storedDecks=localStorage.getItem('decks');
        if(storedDecks){
            setDecks(JSON.parse(storedDecks))
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


    const generateId=()=>(Math.floor(Math.random()*10000))

    const handleCreateFlashCard=()=>{
        let flashCard={
            fid:generateId(),
            question,
            answer
        };
        let updatedDeck={...newdeck,flashcards:[...newdeck.flashcards,flashCard]}
        setNewDeck(updatedDeck);
        let updatedDecks = decks.map(deck => 
            deck.id === deckId ? { ...deck, flashcards: [...deck.flashcards, flashCard] } : deck
        );
        setDecks(updatedDecks);

        localStorage.setItem("decks",JSON.stringify(updatedDecks));
        setAnswer("");
        setQuestion("");

    }
    const handleCreateDeck=()=>{
        let deck={
            id:generateId(),
            deckName,
            flashcards:[]
        };
        setNewDeck(deck);
        setDeckId(deck.id);
        let newDecks=[...decks,deck];
        setDecks(newDecks);
        localStorage.setItem("decks",JSON.stringify(newDecks));
        console.log('deck created Successfully');
        setIsCreated(true);
    }
    if(isCreated===false){
        return (
            <div className='flex flex-row justify-center m-20'>                
                <Card className='bg-gray-200 shadow-2xl w-1/3'>                    
                    <CardHeader className='text-2xl font-extrabold font-nunito'>
                        <CardTitle>Create New Deck</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className='flex flex-col justify-center items-center'>
                            <Input value={deckName} placeholder="Deck Name" onChange={(e)=>(setdeckName(e.target.value))}/>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button className="text-lg px-6 py-6" onClick={()=>{handleCreateDeck()}}>Create</Button>
                    </CardFooter>
                </Card>
            </div>
        )
    }else{
        return(
            <div className='flex flex-col items-center m-20'>
                
                <Card className='w-1/3 h-2/3'>
                    <CardHeader className="flex flex-row justify-center items-center text-center text-4xl">
                        <CardTitle>Add FlashCard</CardTitle>
                    </CardHeader>
                    <CardContent className='flex flex-col space-y-5'>
                        
                            <Input value={question} placeholder="Question" onChange={(e)=>(setQuestion(e.target.value))}/>
                            <Textarea value={answer} placeholder="Answer" onChange={(e)=>(setAnswer(e.target.value))}/>
                        
                    </CardContent>
                    <CardFooter className='flex flex-row justify-center'>
                        
                        <Button className='text-xl' onClick={()=>{handleCreateFlashCard()}}>Add</Button>
                        
                    </CardFooter>
                </Card>

                <div className='m-10 flex flex-col items-center' >
                    <h2>FlashCards</h2>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                        {
                            newdeck.flashcards.map((flashcard)=>{
                                
                                return(
                                    <><FlashCard fid={flashcard.fid} question={flashcard.question} answer={flashcard.answer}/></>
                                )
                            })
                        }
                    </div>
                </div>

            </div>
        )
    }
}
export default CreateDeck