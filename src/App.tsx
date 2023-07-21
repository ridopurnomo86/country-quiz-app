import QuizCard from "./components/cards/QuizCard";
import { QuestionType, answersType } from "./components/cards/QuizCard/types";
import useQuiz from "./hooks/useQuiz";
import ResultCard from "./components/cards/ResultCard";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const {
    countrySelection,
    typeQuestion,
    answers,
    handleChooseAnswer,
    handleNextQuestion,
    isNext,
    isResetQuestion,
    handleResetQuiz,
    totalCorrect,
  } = useQuiz();

  return (
    <div className="main-container">
      <div className="container">
        <div className="quiz-card-wrapper">
          <p className="title-text">Country Quiz</p>
          {isResetQuestion ? (
            <ResultCard
              onTryAgain={handleResetQuiz}
              totalCorrect={totalCorrect}
            />
          ) : (
            <QuizCard
              questionType={typeQuestion as QuestionType}
              capital={countrySelection?.capital?.[0] as string}
              imgUrl={countrySelection?.flags?.png as string}
              alt={countrySelection?.flags?.alt as string}
              onNext={handleNextQuestion}
              onChooseAnswer={handleChooseAnswer}
              answers={answers as answersType[]}
              isShowNext={isNext}
              isChooseAnswer={Boolean(countrySelection?.correctAnswer)}
            />
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
