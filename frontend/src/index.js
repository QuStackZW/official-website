import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux"; // eslint-disable-line no-unused-vars
import { createStore, applyMiddleware, compose } from "redux";
import { createRoot } from "react-dom/client";
import thunk from "redux-thunk";

import { reducers } from "./reducers";
import App from "./App";

const store = createStore(reducers, compose(applyMiddleware(thunk)));

const rootNode = document.getElementById("root");
const root = createRoot(rootNode);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
