import { useContext } from "react";
import { FilterContext } from "./FilterContext";
import { Filters } from "./Filters";
import { FilterProvider } from "./FilterContext";

export const Map = () => {
  return (
    <FilterProvider>
      <Liste />
    </FilterProvider>
  );
};

const Liste = () => {
  const { filter1, filter2 } = useContext(FilterContext);

  const Cities = [90, 23, 44, 55, 66, 70, 26];
  const renderedCities = Cities.map((c) => {
    if (c > filter1 && c < filter2) return <p>{c}</p>;
    return <p>x</p>;
  });

  return (
    <div>
      <Filters />
      <div>{renderedCities}</div>
    </div>
  );
};
