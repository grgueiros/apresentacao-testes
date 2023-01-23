import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import logo from "./logo.svg";
import "./App.css";
import { getTest } from "./features/unit/state/selectors";
import { fetchTest } from "./features/unit/state/reducer";

function App() {
  const test = useSelector(getTest);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTest());
  }, [dispatch]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>This is my state value: {test}.</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <input type="text" />
      </header>
    </div>
  );
}

export default App;
