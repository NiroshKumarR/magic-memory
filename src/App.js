import { useEffect, useState } from "react";
import "./App.css";
import SingleCard from "./components/SingleCard.js";
const cardImages = [
  { src: "/img/helmet-1.png", matched: false },
  { src: "/img/potion-1.png", matched: false },
  { src: "/img/ring-1.png", matched: false },
  { src: "/img/scroll-1.png", matched: false },
  { src: "/img/shield-1.png", matched: false },
  { src: "/img/sword-1.png", matched: false },
];

function App() {
  const [cards, setCards] = useState([]);
  const [turn, setTurn] = useState(0);
  const [choice1, setChoice1] = useState(null);
  const [choice2, setChoice2] = useState(null);
  const [disabled, setDisabled] = useState(false);

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffledCards);
    setTurn(0);
  };
  const handleCardClick = (id) => {
    choice1 ? setChoice2(id) : setChoice1(id);
  };

  const resetTurn = () => {
    setChoice1(null);
    setChoice2(null);
    setTurn(turn + 1);
    setDisabled(false);
  };
  useEffect(() => {
    if (choice1 && choice2) {
      setDisabled(true);

      if (choice1.src === choice2.src) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === choice1.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        setTimeout(() => resetTurn(), 1000);
      } else {
        console.log("Its not a match");
        resetTurn();
      }
    }
  }, [choice1, choice2]);

  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New Game</button>
      <div className="card-grid">
        {cards.map((card) => (
          <SingleCard
            key={card.id}
            card={card}
            handleClick={handleCardClick}
            flipped={card === choice1 || card === choice2 || card.matched}
            disabled={disabled}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
