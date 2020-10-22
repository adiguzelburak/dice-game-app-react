import React, { useState, useEffect } from "react";
import random from "../Images/random.png";
import Scores from "./Scores";
import WhoWin from "./WhoWin";

const Manager = (props) => {
  const [totalGame, setTotalGame] = useState(0);
  const [randomItemYou, setRandomItemYou] = useState(0);
  const [randomItemRival, setRandomItemRival] = useState(0);
  const [stat, setStat] = useState("");
  const [isShowResults, setIsShowResults] = useState(false);
  const [isShowStat, setIsShowStat] = useState(false);
  const [isShowStartGame, setIsShowStartGame] = useState(true);

  function totalGameCounter() {
    setTotalGame(totalGame + 1);
    const numbersYou = [1, 2, 3, 4, 5, 6];
    const numbersRival = [1, 2, 3, 4, 5, 6];
    const randomItemYou =
      numbersYou[Math.floor(Math.random() * numbersYou.length)];
    const randomItemRival =
      numbersRival[Math.floor(Math.random() * numbersRival.length)];

    setRandomItemRival(randomItemRival);
    setRandomItemYou(randomItemYou);
    setIsShowResults(true);
    setIsShowStat(true);
    setIsShowStartGame(false);
  }

  const [win, setWin] = useState(0);
  const [lose, setLose] = useState(0);
  const [draw, setDraw] = useState(0);
  useEffect(() => {
    console.log({ randomItemYou, randomItemRival });

    if (randomItemYou > randomItemRival) {
      setWin(win + 1);
      setStat("You Win !");
    }
    if (randomItemYou < randomItemRival) {
      setLose(lose + 1);
      setStat("You Lose !");
    }
    if (randomItemYou === randomItemRival) {
      setDraw(draw + 1);
      setStat("You Draw !");
    }
    if (randomItemYou === 0 || randomItemRival === 0) {
      setDraw(0);
    }
  }, [randomItemYou, randomItemRival]);

  function clear() {
    window.location.reload();
  }

  return (
    <div className="manager">
      <div className="asdf">
        <img
          className="randomIMG"
          src={random}
          alt="Img"
          onClick={totalGameCounter}
        ></img>
        <button className="btn" onClick={clear}>
          Restart
        </button>
      </div>
      <Scores
        tg={totalGame}
        randomItemYou={randomItemYou}
        randomItemRival={randomItemRival}
      />
      <WhoWin
        randomItemYou={randomItemYou}
        randomItemRival={randomItemRival}
        win={win}
        lose={lose}
        draw={draw}
        stat={stat}
        isShowResults={isShowResults}
        isShowStat={isShowStat}
        isShowStartGame={isShowStartGame}
      />
    </div>
  );
};

export default Manager;
