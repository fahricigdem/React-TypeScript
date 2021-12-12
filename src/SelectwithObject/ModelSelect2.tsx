import { HStack, Select, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { turbines } from "./turbines";

export const ModelSelect2 = () => {
  const [manufacturer, setManufacturer] = useState("");
  const [id, setId] = useState("");
  ////////////////////
  const manufacturers = Array.from(
    new Set(turbines.map((t) => t.manufacturer))
  );

  const manufacturerOptions = manufacturers
    .sort()
    .map((manufacturer) => (
      <option value={manufacturer}> {manufacturer} </option>
    ));

  console.log(manufacturer, id);

  //////////////////
  let models = [];
  if (manufacturer) {
    turbines.map((turbine) => {
      if (turbine.manufacturer === manufacturer) {
        models = [...models, { name: turbine.name, id: turbine._id }];
      }
      return null;
    });
  }

  const modelOptions = models.map((model) => (
    <option value={model.id}>{model.name}</option>
  ));

  return (
    <>
      <HStack w="30rem">
        <Select
          onChange={(e) => {
            setManufacturer(e.target.value);
            setId("");
          }}
        >
          <option value=""> Manufacturer - Alle</option>
          {manufacturerOptions}
        </Select>
        <Select
          onChange={(e) => setId(e.target.value)}
          disabled={manufacturer.length === 0}
          value=""
        >
          <option value="">
            Modell -{" "}
            {id ? turbines.filter((t) => (t._id = id))[0].name : "Alle"}
          </option>
          {modelOptions}
        </Select>
      </HStack>
      <br />
      <br />
      <p>
        {manufacturer} {manufacturer && id}
      </p>
    </>
  );
};
