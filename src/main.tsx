import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";
import { Headline, LayoutBox } from "@e1011/es-kit";
import '@e1011/es-kit/dist/ui/index.css';

Amplify.configure(outputs);

window.React = React

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>    
    <LayoutBox width='100vw' height='calc(100vh - 0px)'>    
      <LayoutBox
        column
        border='1px solid red' padding='1rem' width='100%' height='100%' justify="center" align="center">
        
        <Headline>Core Vite AWS</Headline>
        
        <App />        
      </LayoutBox>  
    </LayoutBox>
  </StrictMode>
);
