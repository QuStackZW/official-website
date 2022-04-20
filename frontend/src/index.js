import React, { StrictMode } from "react";
import { Provider } from "react-redux"; // eslint-disable-line no-unused-vars
import { createStore, applyMiddleware, compose } from "redux";
import { createRoot } from "react-dom/client";
import thunk from "redux-thunk";

import allReducers from "./reducers";
import App from "./App";

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// Container
const rootNode = document.getElementById("root");
const root = createRoot(rootNode);

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
