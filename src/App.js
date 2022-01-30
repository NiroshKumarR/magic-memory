import { useState } from "react";
import "./App.css";

const cardImages = [
  {
    src: "/img/helmet-1.png",
  },
  { src: "/img/potion-1.png" },
  { src: "/img/ring-1.png" },
  { src: "/img/scroll-1.png" },
  { src: "/img/shield-1.png" },
  { src: "/img/sword-1.png" },
];

function App() {
  const [cards, setCards] = useState([]);
  const [turn, setTurn] = useState(0);

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffledCards);
    setTurn(0);
  };
  console.log(cards, turn);
  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New Game</button>
      <div className="card-grid">
        {cards.map((card) => (
          <div className="card" key={card.id}>
            <div className="card-front">
              <img src={card.src} alt="card" />
            </div>
            <div className="card-back">
              <img src="/img/cover.png" alt="card" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
