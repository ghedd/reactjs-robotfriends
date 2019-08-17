import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import App from "./App";

// redux stuff
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import { rootReducer } from "./Reducers/RootReducer.reducer";

/* --------- redux store & logger -------- */
const logger = createLogger();
const store = createStore(rootReducer, applyMiddleware(thunk, logger));
ReactDOM.render(
  // NOTE Provider passes the store to EVERY component of the tree
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
