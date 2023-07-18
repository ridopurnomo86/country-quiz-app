import { useCallback, useEffect, useState, useRef, useMemo } from "react";
import useGetCountry from "./useGetCountry";
import { QuestionType } from "../cards/QuizCard/types";
import { CountryDataType } from "../types/country-data";
import { getRandomNumber } from "../modules/randomNumber";

const useQuiz = () => {
  const { countries } = useGetCountry();
  const [typeQuestion, setTypeQuestion] = useState<QuestionType>();
  const [countrySelection, setCountrySelection] = useState<CountryDataType>(
    {} as CountryDataType
  );
  const answersRef = useRef(null);

  const generateTypeQuestion = useCallback(() => {
    const typeQuestion = ["flag", "capital"];
    setTypeQuestion(typeQuestion[getRandomNumber(2)] as QuestionType);
  }, []);

  const handleSelectionCountry = () => {
    const idx = getRandomNumber(Number(countries.length));
    if (countries[idx]) {
      setCountrySelection(countries[idx]);
    }
  };

  const generateAnswer = useCallback(() => {
    if (countries) {
      const answers = [...Array(3).keys()].map(() => ({
        ...countries[getRandomNumber(Number(countries.length))],
      }));

      answers.push(countrySelection);

      answers.sort(() => Math.random() - 0.5);

      answersRef.current = answers;
    }
    return null;
  }, [countries]);

  useEffect(() => {
    handleSelectionCountry();
    generateTypeQuestion();
  }, [countries]);

  useEffect(() => {
    generateAnswer();
  }, [countrySelection, countries, typeQuestion, generateAnswer]);

  console.log(answersRef.current);

  const handleChooseAnswer = (item: CountryDataType) => {
    // if (item.name.common === countrySelection.name.common)
    //   return setCountrySelection((prev) => ({ ...prev, correctAnswer: true }));
    // if (item.name.common !== countrySelection.name.common) {
    //   item.wrongAnswer = true;
    //   setCountrySelection((prev) => ({ ...prev, correctAnswer: true }));
    // }
  };

  return {
    typeQuestion,
    countrySelection,
    answers: answersRef.current,
    handleChooseAnswer,
  };
};

export default useQuiz;
