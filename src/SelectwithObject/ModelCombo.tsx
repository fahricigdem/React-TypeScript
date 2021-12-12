import { useCallback, useEffect, useState } from "react";
import { turbines } from "./turbines";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
  ComboboxOptionText,
} from "@reach/combobox";
import "@reach/combobox/styles.css";

// console.log("turbines", turbines);
// console.log(Array.from(new Set(turbines.map((t) => t.manufacturer))));

export const ModelCombo = () => {
  const [mymanufacturer, setMymanufacturer] = useState("");
  const [myId, setMyId] = useState("");
  const [selected, setSelected] = useState(turbines.slice(0, 20));

  let newTurbines;
  if (mymanufacturer)
    newTurbines = turbines.filter((t) => t.manufacturer === mymanufacturer);
  else if (myId) newTurbines = turbines.filter((t) => t._id === myId);
  else newTurbines = [...turbines];

  useEffect(() => {
    setSelected(newTurbines);
  }, [myId, mymanufacturer]);

  const [term, setTerm] = useState("");

  function compareFirstmanufacturers(a, b) {
    if (a.manufacturer.toLowerCase() < b.manufacturer.toLowerCase()) {
      return -1;
    }
    if (a.manufacturer.toLowerCase() > b.manufacturer.toLowerCase()) {
      return 1;
    }
    return 0;
  }

  const handleChange = (event) => {
    return setTerm(event.target.value.toLowerCase());
  };

  let results = turbines
    .filter((t) => `${t?.manufacturer} ${t?.name}`.toLowerCase().includes(term))
    .sort(compareFirstmanufacturers)
    .filter(
      (t) =>
        t?.manufacturer.toLowerCase().charAt(0) === term.toLowerCase().charAt(0)
    );

  const manufacturers = Array.from(new Set(results.map((t) => t.manufacturer)));

  useEffect(() => {
    console.log(
      "selected=>",
      selected.map((s) => `${s.manufacturer} - ${s.name}`)
    );
  }, [selected]);
  useEffect(() => {
    console.log("-->", mymanufacturer, " & ", myId);
  }, [mymanufacturer, myId]);

  return (
    <div>
      <h4>Hersteller/Modell</h4>
      <Combobox>
        <ComboboxInput
          onChange={handleChange}
          placeholder="vestas v126/3300"
          style={{
            width: 300,
            height: 40,
            paddingLeft: "8px",
            // backgroundColor: "#eee",
            border: "solid 1px black",
          }}
        />
        {results && (
          <ComboboxPopover
            style={{
              width: 300,

              maxHeight: "280px",
              overflowY: "auto",
            }}
          >
            {results.length > 0 ? (
              <ComboboxList>
                {
                  results?.map((turbine, index) => {
                    if (manufacturers.includes(turbine.manufacturer)) {
                      manufacturers.shift();
                      return (
                        <div key={index}>
                          <ComboboxOption
                            style={{
                              backgroundColor: "#eee",
                            }}
                            value={turbine.manufacturer}
                            onClick={() => {
                              setMyId("");
                              setMymanufacturer(turbine.manufacturer);
                            }}
                          >
                            ➔ <ComboboxOptionText />
                          </ComboboxOption>

                          <ComboboxOption
                            key={index}
                            value={`${turbine?.manufacturer} ${turbine?.name}`}
                            onClick={() => {
                              setMyId(turbine._id);
                              setMymanufacturer("");
                            }}
                          />
                        </div>
                      );
                    } else {
                      return (
                        <ComboboxOption
                          key={index}
                          value={`${turbine?.manufacturer} ${turbine?.name}`}
                          onClick={() => {
                            setMyId(turbine._id);
                            setMymanufacturer("");
                          }}
                        />
                      );
                    }
                  })
                  //.slice(0, 10)
                }
              </ComboboxList>
            ) : (
              <div>
                <p style={{ padding: 10, textAlign: "center" }}>No results</p>
              </div>
            )}
          </ComboboxPopover>
        )}
      </Combobox>
    </div>
  );
};
