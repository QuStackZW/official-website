import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

// create container
const rootNode = document.getElementById("root");
const root = createRoot(rootNode);

// Notes to developers:
// 1. The createRoot function is a React utility function that creates a container for the React tree.
// 2. The createRoot function takes a DOM node as an argument.
// 3. The createRoot function returns a React root object.
// 4. The createRoot function is used to create a container for the React tree.

// We shall render everything under the Provider class component which is a wrapper for the entire application.
// The Provider class component is a wrapper for the entire application.
// The Provider class component is used to provide the application with the store.

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
serviceWorker.unregister();
