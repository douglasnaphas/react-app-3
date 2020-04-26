import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <br />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          onClick={() => {
            console.log("another link clicked");
          }}
        >
          another link
        </a>
        <br></br>
        <a href="https://www.google.com" target="_blank">
          <p>
            This has<em>content</em>in it
          </p>
        </a>
      </header>
    </div>
  );
}

export default App;
