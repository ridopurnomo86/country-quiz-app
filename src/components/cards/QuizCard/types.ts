import { CountryDataType } from "../../../types/country-data";

export type QuestionType = "flag" | "capital";

export interface answersType extends CountryDataType {
  wrongAnswer: boolean;
  correctAnswer: boolean;
  isDisable: boolean;
}

export type QuizCardPropsType = {
  capital: string;
  answers: Array<answersType>;
  onNext: () => void;
  onChooseAnswer: (item: CountryDataType) => void;
  questionType: QuestionType;
  alt: string;
  imgUrl: string;
  isShowNext: boolean;
  isChooseAnswer: boolean;
};
