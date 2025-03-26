import React, { useState, useEffect } from "react";
import PlayCard from "../components/custom/PlayCard";
import { useParams } from "react-router-dom";
import { Button } from "../components/ui/button";
function Play() {
  const [decks, setDecks] = useState([]);
  const [flashcards, setFlashcards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const { DeckId } = useParams();
  const id = Number(DeckId);

  useEffect(() => {
    const storedDecks = localStorage.getItem("decks");
    if (storedDecks) {
      setDecks(JSON.parse(storedDecks));
    } else {
      fetch("/decks.json")
        .then((res) => res.json())
        .then((data) => {
          setDecks(data);
          localStorage.setItem("decks", JSON.stringify(data));
        })
        .catch((error) => console.error("Error loading decks:", error));
    }
  }, []);

  useEffect(() => {
    if (decks.length > 0) {
      const deck = decks.find((deck) => deck.id === id);
      setFlashcards(deck?.flashcards || []); 
    }
  }, [decks, id]);

  
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < flashcards.length - 1 ? prevIndex + 1 : 0
    );
  };

  return (
    <div className="w-full flex flex-row justify-center items-center mt-40">
    <div className="w-1/2 h-96 flex flex-col justify-center items-center">
      {flashcards.length > 0 ? (
        <>
          <PlayCard
            question={flashcards[currentIndex]?.question}
            answer={flashcards[currentIndex]?.answer}
            id={flashcards[currentIndex]?.fid}
          />
          <Button
            onClick={handleNext}
            className="bg-blue-500 text-white px-6 py-6 mt-9 text-3xl rounded-lg hover:bg-blue-700 transition"
          >
            Next
          </Button>
        </>
      ) : (
        <p className="text-gray-500 text-lg">No flashcards available.</p>
      )}
    </div>
    </div>
  );
  
}

export default Play;
