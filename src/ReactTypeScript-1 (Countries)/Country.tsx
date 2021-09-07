//import { FunctionComponent as FC } from "react";
import React from 'react';
import { CountryType } from "./types";

interface ICountryProps {
  country: CountryType;
}

const Country: React.FC<ICountryProps> = (props) => {
  const { country } = props;
  return <h2>{country.name}</h2>;
};

export default Country;
