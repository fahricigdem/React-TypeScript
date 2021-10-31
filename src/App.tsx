export const App = () => {
  const data = [
    { kat: "a", val: 1 },
    { kat: "a", val: 2 },
    { kat: "b", val: 5 },
    { kat: "b", val: 7 },
  ];

  const kats = new Set(data.map((e) => e.kat));

  const renderedData = data.map((element, index) => {
    let margin = "0px";
    if (kats.has(element.kat)) {
      margin = "15px";
      kats.delete(element.kat);
    }
    return (
      <h1 style={{ marginTop: margin }} key={index}>
        {element.val}
      </h1>
    );
  });

  return <>{renderedData}</>;
};
