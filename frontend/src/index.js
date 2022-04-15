import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";

import thunk from "redux-thunk";
import reducers from "./reducers";

import App from "./App";

const store = createStore(reducers, compose(applyMiddleware(thunk)));

const rootNode = createRoot(document.getElementById("root"));

rootNode.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
