import "./card.css";

export default function SingleCard({ card }) {
  return (
    <div className="card">
      <img className="card-front" src={card.src} alt="card" />

      <img className="card-back" src="/img/cover.png" alt="card" />
    </div>
  );
}
