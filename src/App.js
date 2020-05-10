import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Select from "react-select";

function App() {
  const [selectedOption, setSelectedOption] = useState(null);
  const handleChange = (s) => {
    console.log(`setting...`, s, setSelectedOption(s));
  };
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  return (
    <div className="App">
      <div>
        <Select
          value={selectedOption}
          onChange={handleChange}
          options={options}
        ></Select>
      </div>
    </div>
  );
}

export default App;
