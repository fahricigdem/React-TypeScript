import { useState } from "react";

export const App = () => {
  const [myName, setMyName] = useState("Name");
  const [myId, setMyId] = useState("Id");

  let turbines = [
    { name: "Vestas", id: "1111", model: "AAA" },
    { name: "Vestas", id: "2222", model: "BBB" },
    { name: "Siemens", id: "3333", model: "XXX" },
    { name: "Siemens", id: "4444", model: "YYY" },
  ];

  const names = Array.from(new Set(["Vestas", "Siemens"]));

  const handleSelect = (value) => {
    let parsedValue = JSON.parse(value);
    if (!parsedValue.name) {
      setMyName("_");
      setMyId(parsedValue.id);
    } else {
      setMyName(parsedValue.name);
      setMyId("_");
    }
  };

  const renderedOptions = turbines.map((turbine) => {
    if (names.includes(turbine.name)) {
      names.shift();
      let name = JSON.stringify({ name: turbine.name });
      let id = JSON.stringify({ id: turbine.id });
      return (
        <>
          <option value={name}> {turbine.name} </option>
          <option value={id}>
            {turbine.name} - {turbine.model}
          </option>
        </>
      );
    }
    let id = JSON.stringify({ id: turbine.id });
    return (
      <option value={id}>
        {turbine.name} - {turbine.model}{" "}
      </option>
    );
  });

  console.log(myName, myId);
  return (
    <div>
      <select onChange={(e) => handleSelect(e.target.value)}>
        <option> select </option>
        {renderedOptions}
      </select>
      <br />
      <br />
      <br />
      <br />
      <p>
        {myName} - {myId}
      </p>
    </div>
  );
};
