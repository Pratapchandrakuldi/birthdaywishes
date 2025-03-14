import "./card.css";

function BdayCard({ name, bdayImg }) {
  return (
    <div className="bdaycard">
      <span>{name}</span>
      <div className="bdaycardimg">
        <img src={bdayImg} alt="bdayimg" />
      </div>
      <h1>Happy Birthday!</h1>
    </div>
  );
}

function CakeCard({ kidName, cakeImg }) {
  return (
    <div className="cakecard">
      <span>{kidName}</span>
      <div className="cakeimg">
        <img src={cakeImg} alt="cakeimg" />
      </div>
      <h1>Best Wishes!</h1>
    </div>
  );
}

function RituCard({ rituName, rituImg }) {
  return (
    <div className="cakecard">
      <span>{rituName}</span>
      <div className="cakeimg">
        <img src={rituImg} alt="cakeimg" />
      </div>
      <h1>Birthday Girl</h1>
    </div>
  );
}

// Use named exports for all components
export { BdayCard, CakeCard, RituCard };
