import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Task } from "./components/task/Task";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Task />
  </React.StrictMode>
);
