import QuizCard from "./cards/QuizCard";
import { QuestionType } from "./cards/QuizCard/types";
import "./App.css";
import useQuiz from "./hooks/useQuiz";

function App() {
  const { countrySelection, typeQuestion, answers, handleChooseAnswer } =
    useQuiz();

  const handleNextQuestion = () => {
    console.log("next");
  };

  return (
    <div className="container">
      <div className="quiz-card-wrapper">
        <p className="title-text">Country Quiz</p>
        <QuizCard
          questionType={typeQuestion as QuestionType}
          capital={countrySelection?.capital?.[0]}
          imgUrl={countrySelection?.flags?.png}
          alt={countrySelection?.flags?.alt}
          onNext={handleNextQuestion}
          onChooseAnswer={handleChooseAnswer}
          answers={answers}
          isShowNext={false}
        />
      </div>
    </div>
  );
}

export default App;
