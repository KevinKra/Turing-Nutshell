import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
import { BrowserRouter } from "react-router-dom";
import { rootReducer } from "./_redux/reducers/";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import * as serviceWorker from "./serviceWorker";

const store = createStore(rootReducer, composeWithDevTools());
const application = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(application, document.getElementById("root"));
serviceWorker.unregister();
