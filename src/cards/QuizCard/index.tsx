import React from "react";
import { QuizCardPropsType } from "./types";
import Adventure from "../../assets/adventure.svg";
import "./styles.css";
import CrossCircle from "../../assets/cross-circle.svg";
import CheckCircle from "../../assets/check-circle.svg";

const ALPABETH = ["A", "B", "C", "D"];

const renderFlagQuestion = ({
  imgUrl,
  alt,
}: {
  imgUrl: string;
  alt: string;
}) => (
  <div className="flag-question-container">
    <img className="flag-image" src={imgUrl} alt={alt} />
    <h2 className="title-flag-text">Which country does this flag belong to?</h2>
  </div>
);

const renderCapitalQuestion = ({ capital }: { capital: string }) => (
  <h2 className="title-text">{`${capital} is the capital of ?`}</h2>
);

const QuizCard: React.FC<QuizCardPropsType> = ({
  capital = "",
  answers,
  onNext,
  onChooseAnswer,
  questionType,
  imgUrl,
  alt,
  isShowNext = false,
}): JSX.Element => (
  <div className="quiz-card-container">
    {questionType === "flag"
      ? renderCapitalQuestion({ capital })
      : renderFlagQuestion({ imgUrl, alt })}
    <img src={Adventure} alt="adventure-image" className="image-adventure" />
    <div className="list-answer-container">
      {answers?.map((item, idx) => (
        <button
          key={idx}
          className="answer-container"
          data-type-error={item?.wrongAnswer}
          data-type-success={item?.correctAnswer}
          onClick={() => onChooseAnswer(item)}
        >
          <div className="flex-container">
            <p className="choose-text">{ALPABETH[idx]}</p>
            <p className="answer-text">{item?.name?.common}</p>
          </div>
          <div className="icon-container">
            {item?.wrongAnswer && <img src={CrossCircle} alt="cross-icon" />}
            {item?.correctAnswer && <img src={CheckCircle} alt="check-icon" />}
          </div>
        </button>
      ))}
    </div>
    {isShowNext && !!onNext && (
      <div className="button-container">
        <button className="button-next-question" onClick={onNext}>
          <p className="button-next-text">Next</p>
        </button>
      </div>
    )}
  </div>
);

export default QuizCard;
