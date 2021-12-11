import { useState, createContext, useEffect } from "react";

export const FilterContext = createContext(null);

export const FilterProvider = (props) => {
  const [filter1, setFilter1] = useState(0);
  const [filter2, setFilter2] = useState(101);

  return (
    <FilterContext.Provider
      value={{
        value1: { filter1, setFilter1 },
        value2: { filter2, setFilter2 },
      }}
    >
      {props.children}
    </FilterContext.Provider>
  );
};
