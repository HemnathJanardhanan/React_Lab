import FlashCard from "./models/flashcards.js";
import Deck from "./models/decks.js";
import cors from 'cors'
import express from "express";
import dbconnect from "./config/db.js";
const app=express();
app.use(express.json());
app.use(cors());

dbconnect();

app.get('/decks', async (req, res) => {
    try {
        const decks = await Deck.find().populate('flashCards');
        res.status(200).json(decks);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch decks' });
    }
});

app.post('/deck', async (req, res) => {
    const { deckName } = req.body;
    try {
        const newDeck = new Deck({ deckName });
        await newDeck.save();
        res.status(201).json(newDeck);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create deck' });
    }
});

app.post('/deck/:deckId/card', async (req, res) => {
    const { deckId } = req.params;
    const { question, answer } = req.body;
    try {
        const newCard = new FlashCard({ question, answer });
        await newCard.save();

        const deck = await Deck.findById(deckId);
        deck.flashCards.push(newCard._id);
        await deck.save();

        res.status(201).json({ message: 'Card added to deck', card: newCard });
    } catch (error) {
        res.status(500).json({ error: 'Failed to add flashcard' });
    }
});


app.get('/deck/:deckId/play', async (req, res) => {
    try {
        const deck = await Deck.findById(req.params.deckId).populate('flashCards');
        const shuffled = deck.flashCards.sort(() => Math.random() - 0.5);
        res.status(200).json(shuffled);
    } catch (error) {
        res.status(500).json({ error: 'Failed to load flashcards' });
    }
});

app.listen(3000,()=>console.log(`App is listening on http://localhost:3000/`))