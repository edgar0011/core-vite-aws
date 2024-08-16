import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Headline, LayoutBox } from "@e1011/es-kit";
import '@e1011/es-kit/dist/ui/index.css';

window.React = React

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>    
    <LayoutBox width='100vw' height='calc(100vh - 0px)'>    
      <LayoutBox
        column
        padding='1rem' width='100%' height='100%' justify="center" align="center">        
          <Headline>Core Vite AWS</Headline>
      </LayoutBox>  
    </LayoutBox>
  </StrictMode>
);
