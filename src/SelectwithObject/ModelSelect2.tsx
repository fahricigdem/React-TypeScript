import { useState } from "react";
import { turbines } from "./turbines";

export const ModelSelect2 = () => {
  const [manufacturer, setManufacturer] = useState("");
  const [id, setId] = useState("");
  ////////////////////
  const manufacturers = Array.from(
    new Set(turbines.map((t) => t.manufacturer))
  );

  const manufacturerOptions = manufacturers.map((manufacturer) => (
    <option value={manufacturer}> {manufacturer} </option>
  ));

  console.log(manufacturer, id);

  //////////////////
  let models = [];
  if (manufacturer) {
    turbines.map((turbine) => {
      if (turbine.manufacturer === manufacturer) {
        models = [...models, turbine.name];
      }
      return null;
    });
    models = Array.from(new Set(models));
  }

  const modelOptions = models.map((model) => (
    <option value={model}> {model} </option>
  ));

  return (
    <div>
      <select
        onChange={(e) => {
          setManufacturer(e.target.value);
          setId("");
        }}
      >
        <option value=""> Manufacturer </option>
        {manufacturerOptions}
      </select>
      <select
        onChange={(e) => setId(e.target.value)}
        disabled={manufacturer.length === 0}
      >
        <option value=""> Modell </option>
        {modelOptions}
      </select>
      <br />
      <br />
      <p>
        {manufacturer} {manufacturer && id}
      </p>
    </div>
  );
};
