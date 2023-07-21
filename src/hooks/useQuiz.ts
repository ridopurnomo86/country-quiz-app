import { useEffect, useRef, useState } from "react";
import useGetCountry from "./useGetCountry";
import { QuestionType } from "../components/cards/QuizCard/types";
import { CountryDataType } from "../types/country-data";
import { getRandomNumber } from "../modules/randomNumber";

const useQuiz = () => {
  const totalAnswerRef = useRef(0);
  const nextQuestionRef = useRef(false);
  const resetQuestionRef = useRef(false);

  const { countries, randomCountries, selectedCountry } = useGetCountry([
    nextQuestionRef.current,
  ]);
  const [isNext, setIsNext] = useState<boolean>(false);
  const [typeQuestion, setTypeQuestion] = useState<QuestionType>();

  const generateTypeQuestion = () => {
    const typeQuestion = ["flag", "capital"];
    setTypeQuestion(typeQuestion[getRandomNumber(2)] as QuestionType);
  };

  useEffect(() => {
    generateTypeQuestion();
  }, [countries]);

  const handleChooseAnswer = (item: CountryDataType) => {
    setIsNext((prev) => !prev);

    if (item.name.common === selectedCountry?.name.common) {
      totalAnswerRef.current += 1;
      selectedCountry.correctAnswer = true;
    }

    if (item.name.common !== selectedCountry?.name.common) {
      (selectedCountry as CountryDataType).correctAnswer = true;
      (selectedCountry as CountryDataType).isReset = true;
      item.wrongAnswer = true;
    }
  };

  const handleNextQuestion = () => {
    setIsNext((prev) => !prev);
    if ((selectedCountry as CountryDataType).isReset)
      return (resetQuestionRef.current = !resetQuestionRef.current);
    return (nextQuestionRef.current = !nextQuestionRef.current);
  };

  const handleResetQuiz = () => {
    totalAnswerRef.current = 0;
    return window.location.reload();
  };

  return {
    typeQuestion,
    countrySelection: selectedCountry,
    answers: randomCountries,
    handleChooseAnswer,
    handleNextQuestion,
    handleResetQuiz,
    isNext,
    isResetQuestion: resetQuestionRef.current,
    totalCorrect: totalAnswerRef.current,
  };
};

export default useQuiz;
