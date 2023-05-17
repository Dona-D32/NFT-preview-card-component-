import React from "react";
import nft_img from "../assets/images/image-equilibrium.jpg";
import icon_eth from "../assets/images/icon-ethereum.svg";
import icon_clock from "../assets/images/icon-clock.svg";
import avatar_img from "../assets/images/image-avatar.png";

/* Dans la fonction Card, les props sont déclarées comme arguments de la fonction  */
const Card = ({ title, description, ethPrice, timeLeft, creatorName }) => {
 /* On définit notre props dans l'argument de la fonction. */
  const handleLike = () => {
    console.log('Liked!');
   
  
  };

  const handleDislike = () => {
    console.log('Disliked!');
   
  };

  
  return (
    <div className="card">
      <div className="image">
        <img src={nft_img} alt="" />
      </div>
      <div className="details">
        <a href="#">
          <h3 className="title">Equilibrium #3429</h3>
        </a>
        <p className="description">
          Our Equilibrium collection promotes balance and calm.
        </p>
        <div className="numbers">
          <div className="price">
            <img src={icon_eth} className="icon" />
            <span>0.041 ETH</span>
          </div>
          <div className="duration">
            <img src={icon_clock} className="icon" />
            <span>3 days left</span>
          </div>
        </div>
      </div>
      <div className="creator">
        <img src={avatar_img} />
        <p className="creator-name">
          Creation of
          <a href="#"> Jules Wyvern</a>
        </p>
      </div>
      <button className="button" onClick={handleLike}>
        Like !
      </button>
      <button className="button" onClick={handleDislike}>
        Dislike!
      </button>
    </div>

    
  );
};

export default Card;
