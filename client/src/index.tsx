import React,{StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from "./App";
import "normalize.css";

const container = document.getElementById('app')as Element;
const root = createRoot(container);
root.render(<StrictMode> <App/> </StrictMode>);
