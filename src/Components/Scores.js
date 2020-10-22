import React from "react";

const Scores = (props) => {
  return (
    <div className="card">
      <div className="scores">
        <a className="you">You : {props.randomItemYou}</a>
        <a className="rival">Rival : {props.randomItemRival}</a>
      </div>
      <div className="totGame">Total Game : {props.tg}</div>
    </div>
  );
};
export default Scores;
