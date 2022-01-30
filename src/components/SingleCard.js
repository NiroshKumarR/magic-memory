import "./card.css";

export default function SingleCard({ card, handleClick }) {
  const handleChoice = () => {
    handleClick(card);
  };
  return (
    <div className="card">
      <img className="card-front" src={card.src} alt="card" />

      <img
        className="card-back"
        onClick={handleChoice}
        src="/img/cover.png"
        alt="card"
      />
    </div>
  );
}
