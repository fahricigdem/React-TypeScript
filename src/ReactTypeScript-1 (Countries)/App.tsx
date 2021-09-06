import axios from "axios";
import { CountryType } from "../types";
import { useState, useEffect } from "react";
import Country from "./Country";
import Loading from "./Loading";

export default function App() {
  const [countries, setCountries] = useState<CountryType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const getCountries = async () => {
    try {
      const { data } = await axios.get<CountryType[]>(
        "https://restcountries.eu/rest/v2/all"
      );
      setCountries(data);
      console.log(countries);
    } catch {
      console.log("api fetch fehler");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCountries();
  }, []);

  //if (!countries.length) return <div>oops...not found!</div>;

  return (
    <>
      <Loading loading={loading}>
        {countries.map((country) => (
          <Country key={country.name} country={country} />
        ))}
      </Loading>
    </>
  );
}
