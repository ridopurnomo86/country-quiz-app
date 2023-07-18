import { CountryDataType } from "../../types/country-data";

export type QuestionType = "flag" | "capital";

export type answerType = {
  wrongAnswer: boolean;
  correctAnswer: boolean;
  answer: string;
};

export type QuizCardPropsType = {
  capital: string;
  answers: Array<CountryDataType>;
  onNext: () => void;
  onChooseAnswer: (item: CountryDataType) => void;
  questionType: QuestionType;
  alt: string;
  imgUrl: string;
  isShowNext: boolean;
};
