import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";

//import App from './ReactTypeScript-1 (Countries)/App';
//import App from './ReactTypeScript-2/App';
//import App from './ReactTypeScript-3/App';
import App from "./ReactTypeScript-4/App";

ReactDOM.render(
  <ChakraProvider>
    <App />
  </ChakraProvider>,
  document.getElementById("root")
);
