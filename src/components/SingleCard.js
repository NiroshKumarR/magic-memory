import "./card.css";

export default function SingleCard({ disabled, card, handleClick, flipped }) {
  const handleChoice = () => {
    if (!disabled) {
      handleClick(card);
    }
  };
  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img className="front" src={card.src} alt="card" />

        <img
          className="back"
          onClick={handleChoice}
          src="/img/cover.png"
          alt="card"
        />
      </div>
    </div>
  );
}
