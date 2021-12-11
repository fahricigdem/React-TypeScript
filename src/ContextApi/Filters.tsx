import { useContext } from "react";
import { FilterContext } from "./FilterContext";

export const Filters = (params) => {
  const { value1, value2 } = useContext(FilterContext);
  const { setFilter1 } = value1;
  const { setFilter2, filter2 } = value2;

  return (
    <div style={{ border: "1px red solid", display: "inline-block" }}>
      <span>Minimum : </span>
      <input
        placeholder="40"
        type="text"
        onChange={(e) => setFilter1(e.target.value)}
      />

      <span>Maximum : </span>
      <input
        placeholder="80"
        type="text"
        onChange={(e) =>
          setFilter2(e.target.value === "" ? "100" : e.target.value)
        }
      />
    </div>
  );
};