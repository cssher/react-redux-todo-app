import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
// eslint-disable-next-line
import { createStore, applyMiddleware, compose } from "redux";
import MainReducer from "./reducers/MainReducer";
import App from "./App";

const store = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore)(MainReducer);

//Wrapped the App with the Provider to access redux across the whole app

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
