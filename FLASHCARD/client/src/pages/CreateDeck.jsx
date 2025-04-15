import React, { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import FlashCard from '../components/custom/FlashCard'
import axios from 'axios'

function CreateDeck() {
    const [decks, setDecks] = useState([]);
    const [deckForm, setDeckForm] = useState({ name: '' });
    const [newDeck, setNewDeck] = useState(null);
    const [flashcardForm, setFlashcardForm] = useState({ question: '', answer: '' });
  
    // Load all decks on component mount
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
  
    // Create a new deck
    const handleCreateDeck = async () => {
      if (!deckForm.name.trim()) return;
  
      try {
        const res = await axios.post('http://localhost:3000/deck', {
          deckName: deckForm.name.trim(),
        });
  
        const createdDeck = { ...res.data, flashcards: [] };
        setNewDeck(createdDeck);
        setDecks(prev => [...prev, createdDeck]);
        setDeckForm({ name: '' });
      } catch (err) {
        console.error('Error creating deck:', err);
      }
    };
  
    // Add a flashcard to the current deck
    const handleCreateFlashCard = async () => {
      const { question, answer } = flashcardForm;
      if (!question.trim() || !answer.trim() || !newDeck?._id) return;
  
      try {
        const res = await axios.post(`http://localhost:3000/deck/${newDeck._id}/card`, {
          question: question.trim(),
          answer: answer.trim(),
        });
  
        const addedCard = res.data.card;
  
        // Update local newDeck and decks state
        const updatedDeck = {
          ...newDeck,
          flashcards: [...newDeck.flashcards, addedCard],
        };
        setNewDeck(updatedDeck);
  
        setDecks(prev =>
          prev.map(deck =>
            deck._id === newDeck._id
              ? { ...deck, flashcards: [...(deck.flashcards || []), addedCard] }
              : deck
          )
        );
  
        setFlashcardForm({ question: '', answer: '' });
      } catch (err) {
        console.error('Error adding flashcard:', err);
      }
    };

    return (
        <div className="m-20 flex flex-col items-center">
          {!newDeck ? (
            <div className="flex flex-row justify-center w-full">
              <Card className="bg-gray-200 shadow-2xl w-1/3">
                <CardHeader className="text-2xl font-extrabold font-nunito">
                  <CardTitle>Create New Deck</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col justify-center items-center">
                    <Input
                      value={deckForm.name}
                      placeholder="Deck Name"
                      onChange={(e) =>
                        setDeckForm((prev) => ({ ...prev, name: e.target.value }))
                      }
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="text-lg px-6 py-6" onClick={handleCreateDeck}>
                    Create
                  </Button>
                </CardFooter>
              </Card>
            </div>
          ) : (
            <>
              <Card className="w-1/3 h-2/3">
                <CardHeader className="flex flex-row justify-center items-center text-center text-4xl">
                  <CardTitle>Add FlashCard</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col space-y-5">
                  <Input
                    value={flashcardForm.question}
                    placeholder="Question"
                    onChange={(e) =>
                      setFlashcardForm((prev) => ({
                        ...prev,
                        question: e.target.value,
                      }))
                    }
                  />
                  <Textarea
                    value={flashcardForm.answer}
                    placeholder="Answer"
                    onChange={(e) =>
                      setFlashcardForm((prev) => ({
                        ...prev,
                        answer: e.target.value,
                      }))
                    }
                  />
                </CardContent>
                <CardFooter className="flex flex-row justify-center">
                  <Button className="text-xl" onClick={handleCreateFlashCard}>
                    Add
                  </Button>
                </CardFooter>
              </Card>
      
              <div className="m-10 flex flex-col items-center">
                <h2 className="text-xl font-bold mb-4">FlashCards</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {newDeck.flashcards.map((flashcard) => (
                    <FlashCard
                      key={flashcard._id}
                      fid={flashcard._id}
                      question={flashcard.question}
                      answer={flashcard.answer}
                    />
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      );
      
}

export default CreateDeck;
