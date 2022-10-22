import React from "react";

import "./App.css";
import 'ag-grid-community/styles//ag-grid.css';
import 'ag-grid-community/styles//ag-theme-alpine.css';
import StockGrid from "./components/stock";
import { Provider } from "react-redux";
import configureStore from "./redux/store";

function App() {
  return (
    <Provider store={configureStore()}>
        <StockGrid />
    </Provider>
  );
}

export default App;
