import { useState, useEffect, useRef } from "react";
import { CountryDataType } from "../types/country-data";
import axios from "axios";
import { getRandomNumber } from "../modules/randomNumber";

const URL = "https://restcountries.com/v3.1/all?fields=name,flags,capital";

const generateRandomCountries = (countries: CountryDataType[]) => {
  return [...Array(3).keys()].map(() => ({
    ...countries[getRandomNumber(countries.length)],
  })) as CountryDataType[];
};

const useGetCountry = (depedencies: any = []) => {
  const selectedCountryRef = useRef<CountryDataType>();
  const [countries, setCountries] = useState<CountryDataType[]>([]);
  const [randomCountries, setRandomCountries] = useState<CountryDataType[]>([]);

  const getFlagCountry = async () => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const { data } = await axios.get(URL);
      if (data) {
        const filterData = (data as CountryDataType[])
          .filter((item) => item.capital.length > 0)
          .map((country) => country);
        setCountries(filterData);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const generateSelectionCountry = () => {
    const idx = getRandomNumber(countries.length);
    if (countries[idx]?.name) selectedCountryRef.current = countries[idx];
  };

  const getRandomCountries = () => {
    if (selectedCountryRef.current) {
      const random = generateRandomCountries(countries);
      random.push(selectedCountryRef.current);
      random.sort(() => Math.random() - 0.5);
      return setRandomCountries(random);
    }
    return null;
  };

  useEffect(() => {
    void getFlagCountry();
  }, []);

  useEffect(() => {
    void generateSelectionCountry();
    void getRandomCountries();
  }, [countries, ...depedencies]);

  return {
    countries,
    randomCountries,
    selectedCountry: selectedCountryRef.current,
  };
};

export default useGetCountry;
