import React, { useState, useEffect } from "react";
import one from "../Images/one.png";
import two from "../Images/two.png";
import three from "../Images/three.png";
import four from "../Images/four.png";
import five from "../Images/five.png";
import six from "../Images/six.png";

const WhoWin = (props) => {
  return (
    <div className="whoWin-card">
      {props.isShowResults && (
        <div className="results">
          <div className="text">You:</div>
          <div>
            {props.randomItemYou === 1 && <img src={one} alt="1"></img>}
            {props.randomItemYou === 2 && <img src={two} alt="2"></img>}
            {props.randomItemYou === 3 && <img src={three} alt="3"></img>}
            {props.randomItemYou === 4 && <img src={four} alt="4"></img>}
            {props.randomItemYou === 5 && <img src={five} alt="5"></img>}
            {props.randomItemYou === 6 && <img src={six} alt="6"></img>}
          </div>
          <div className="text">Rival:</div>
          <div>
            {props.randomItemRival === 1 && <img src={one} alt="1"></img>}
            {props.randomItemRival === 2 && <img src={two} alt="2"></img>}
            {props.randomItemRival === 3 && <img src={three} alt="3"></img>}
            {props.randomItemRival === 4 && <img src={four} alt="4"></img>}
            {props.randomItemRival === 5 && <img src={five} alt="5"></img>}
            {props.randomItemRival === 6 && <img src={six} alt="6"></img>}
          </div>
        </div>
      )}
      {props.isShowStat && (
        <div className="yourStatue">
          <span>{props.stat}</span>
        </div>
      )}
      {props.isShowStartGame && (
        <div className="start-game">Press Dice to Start Game !</div>
      )}

      <div className="totalScore">
        <span>Win : {props.win}</span>
        <span>Lose : {props.lose}</span>
        <span>Draw : {props.draw}</span>
      </div>
    </div>
  );
};

export default WhoWin;
