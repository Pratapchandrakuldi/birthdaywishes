//////////////////


import React, { useState } from "react";
import "./App.css";
import { BdayCard, CakeCard, RituCard } from "../components/card";

import card1 from "../images/card1.jpg";
import card2 from "../images/card2.jpg";
import card3 from "../images/card3.jpg";
import card4 from "../images/card4.jpg";
import card5 from "../images/card5.jpg";
import card6 from "../images/card6.jpg";
import card9 from "../images/card9.jpg";
import card10 from "../images/card10.jpg";
import card11 from "../images/card11.jpg";
import card14 from "../images/card14.jpg";
import card15 from "../images/card15.jpg";

const images = [card1, card2, card3, card4, card5, card6, card9, card10, card11, card14, card15];


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



