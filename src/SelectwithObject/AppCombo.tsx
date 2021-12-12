import { useState } from "react";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
  ComboboxOptionText,
} from "@reach/combobox";
import "@reach/combobox/styles.css";

let turbines = [
  { name: "Vestas", id: "1111", model: "AAA" },
  { name: "Vestas", id: "2222", model: "BBB" },
  { name: "Siemens", id: "3333", model: "XXX" },
  { name: "Siemens", id: "4444", model: "YYY" },
  { name: "aaaaas", id: "5555", model: "qqq" },
  { name: "aaaaas", id: "6666", model: "lll" },
];

console.log("turbines", turbines);
export const App = () => {
  const [myName, setMyName] = useState("Name");
  const [myId, setMyId] = useState("Id");

  const [term, setTerm] = useState("");

  function compareFirstNames(a, b) {
    //console.log("##", a.name.toLowerCase().charAt(0), b.name.toLowerCase());

    if (a.name.toLowerCase() < b.name.toLowerCase()) {
      return -1;
    }
    if (a.name.toLowerCase() > b.name.toLowerCase()) {
      return 1;
    }
    return 0;
  }

  const handleChange = (event) => {
    return setTerm(event.target.value.toLowerCase());
  };

  let results = turbines
    .filter((t) => `${t?.name} ${t?.model}`.toLowerCase().includes(term))
    .sort(compareFirstNames);

  const names = Array.from(new Set(results.map((t) => t.name)));

  console.log("results", results);
  console.log("myName, myId:", myName, myId);
  return (
    <div>
      <h4>Lots of stuff going on</h4>
      <Combobox>
        <ComboboxInput
          onChange={handleChange}
          style={{
            width: 300,
            margin: 0,
            backgroundColor: "#ddd",
            border: "solid 1px black",
          }}
        />
        {results && (
          <ComboboxPopover
            onChange={(e) => console.log(e.target)}
            style={{
              width: 300,
              // maxHeight: "120px",
              // overflowY: "auto"
            }}
          >
            {results.length > 0 ? (
              <ComboboxList>
                {results
                  ?.map((turbine, index) => {
                    if (names.includes(turbine.name)) {
                      names.shift();
                      return (
                        <div key={index}>
                          <ComboboxOption
                            style={{
                              fontWeight: "bold",
                              backgroundColor: "#ddf",
                            }}
                            value={turbine.name}
                            onClick={() => {
                              setMyId("_");
                              setMyName(turbine.name);
                            }}
                          />
                          <ComboboxOption
                            key={index}
                            value={`${turbine?.name} ${turbine?.model}`}
                            onClick={() => {
                              setMyId(turbine.id);
                              setMyName("_");
                            }}
                          />
                        </div>
                      );
                    } else {
                      return (
                        <ComboboxOption
                          key={index}
                          value={`${turbine?.name} ${turbine?.model}`}
                          onClick={() => {
                            setMyId(turbine.id);
                            setMyName("_");
                          }}
                        />
                      );
                    }
                  })
                  .slice(0, 4)}
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
