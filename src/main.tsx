import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";
import { LayoutBox } from "@e1011/es-kit";

Amplify.configure(outputs);

window.React = React

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>    
    <LayoutBox width='100vw' height='100vh'>
      <LayoutBox border='1px solid red' padding='1rem' width='100%' height='100%'>
        <App />
      </LayoutBox>  
    </LayoutBox>
  </StrictMode>
);
