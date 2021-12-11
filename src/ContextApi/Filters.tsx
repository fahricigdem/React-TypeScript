import { useContext } from "react";
import { FilterContext } from "./FilterContext";

export const Filters = (params) => {
  const { value1, value2 } = useContext(FilterContext);
  const { setFilter1 } = value1;
  const { setFilter2 } = value2;

  return (
    <div style={{ border: "1px red solid", display: "inline-block" }}>
      <input type="text" onChange={(e) => setFilter1(e.target.value)} />
      <p style={{ backgroundColor: "red" }}>-------</p>
      <input type="text" onChange={(e) => setFilter2(e.target.value)} />
    </div>
  );
};
