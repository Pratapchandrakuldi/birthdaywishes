//////////////////


import React, { useState } from "react";
import "./App.css";
import { BdayCard, CakeCard, RituCard } from "../components/card";

const imagesPath = "../images/";

const images = [
  `${imagesPath}card1.jpg`, `${imagesPath}card4.jpg`, `${imagesPath}card2.jpg`,
  `${imagesPath}card3.jpg`, `${imagesPath}card5.jpg`, `${imagesPath}card6.jpg`,
  `${imagesPath}card9.jpg`, `${imagesPath}card14.jpg`, `${imagesPath}card15.jpg`,
  `${imagesPath}card10.jpg`, `${imagesPath}card11.jpg`
];

const App = () => {
  const [showCards, setShowCards] = useState(false);

  const toggleCards = () => {
    setShowCards(!showCards);
  };

  return (
    <div className="app-container">
      <h1 className="title">🎉 Click Below for a Surprise 🎂</h1>
      
      <button className="toggle-btn" onClick={toggleCards}>
        {showCards ? "Hide Wishes ❌" : "Show Birthday Surprise 🎁"}
      </button>

      {showCards && (
        <div className="card-container">
          <div className="special-message">🎀 Birthday Girl 🎀</div>
          <BdayCard name="R.S" bdayImg={images[0]} />
          <div className="special-message">✨ Make a Wish ✨</div>
          <RituCard rituName="Billy" rituImg={images[6]} />
          <CakeCard kidName="....321" cakeImg={images[1]} />
          <RituCard rituName="Billy" rituImg={images[7]} />
          <BdayCard name=".S" bdayImg={images[2]} />
          <RituCard rituName="Billy" rituImg={images[8]} />
          <CakeCard kidName="....321" cakeImg={images[3]} />
          <RituCard rituName="Billy" rituImg={images[9]} />
          <div className="special-message">🎊 Best Wishes! 🎊</div>
          <BdayCard name="R.S" bdayImg={images[4]} />
          <RituCard rituName="Billy" rituImg={images[10]} />
          <CakeCard kidName="....321" cakeImg={images[5]} />
        </div>
      )}
    </div>
  );
};

export default App;



