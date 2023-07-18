import { useState, useEffect } from "react";
import { CountryDataType } from "../types/country-data";
import axios from "axios";

const URL = "https://restcountries.com/v3.1/all?fields=name,flags,capital";

const useGetCountry = () => {
  const [countries, setCountries] = useState<CountryDataType[]>([]);

  const getFlagCountry = async () => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const { data } = await axios.get(URL);
      if (data) {
        setCountries(data as CountryDataType[]);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    void getFlagCountry();
  }, []);

  return { countries };
};

export default useGetCountry;
