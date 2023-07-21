export type CountryDataType = {
  correctAnswer: boolean;
  wrongAnswer: boolean;
  isReset: boolean;
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
  name: {
    common: string;
    official: string;
    nativeName: {
      ara: {
        official: string;
        common: string;
      };
    };
  };
  capital: Array<string>;
};
