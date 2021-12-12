import { useState } from "react";

import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import "@reach/combobox/styles.css";

export const PostalCombo = ({ postalcodes }) => {
  const [postalCode, setPostalCode] = useState("");
  const [term, setTerm] = useState("");

  console.log("selected post", postalCode);

  let list = [...postalcodes].filter((l) => l.includes(term));

  if (term.length === 1)
    list = list.filter((t) => t.substring(0, 1) === term.substring(0, 1));
  else if (term.length === 2)
    list = list.filter((t) => t.substring(0, 2) === term.substring(0, 2));
  else if (term.length === 3)
    list = list.filter((t) => t.substring(0, 3) === term.substring(0, 3));
  else if (term.length === 4)
    list = list.filter((t) => t.substring(0, 4) === term.substring(0, 4));

  list = list.slice(0, 10);

  //console.log("list:", list);

  //console.log("selected postalCode:", postalCode);
  return (
    <div>
      <h4>Postalcodes</h4>
      <Combobox>
        <ComboboxInput
          onChange={(e) => setTerm(e.target.value)}
          placeholder="30149"
          style={{
            width: 300,
            height: 40,
            paddingLeft: "8px",
            border: "solid 1px black",
          }}
        />
        {list && (
          <ComboboxPopover
            style={{
              width: 300,
              maxHeight: "180px",
              overflowY: "auto",
            }}
          >
            {list.length > 0 ? (
              <ComboboxList>
                {
                  list?.map((l, index) => (
                    <ComboboxOption
                      key={index}
                      style={{
                        backgroundColor: "#eee",
                      }}
                      value={l}
                      onClick={() => setPostalCode(l)}
                    />
                  ))
                  //.slice(0, 4)
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
