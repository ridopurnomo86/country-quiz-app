import React from "react";
import Winners from "../../../assets/winners.svg";
import { ResultCardPropsType } from "./types";
import "./styles.css";

const ResultCard: React.FC<ResultCardPropsType> = ({
  totalCorrect,
  onTryAgain,
}): JSX.Element => (
  <div className="result-card-container">
    <img src={Winners} alt="winners-icon" className="image-winner" />
    <h2 className="title-text">Results</h2>
    <p className="subtitle-text">
      You got <span className="total-correct-text">{totalCorrect}</span> correct
      answers
    </p>
    <button className="button-try-again" onClick={onTryAgain}>
      <p className="button-text">Try Again</p>
    </button>
  </div>
);

export default ResultCard;
