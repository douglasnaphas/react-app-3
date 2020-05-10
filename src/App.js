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
  const TextField = ({ label, onBlur, defaultValue, disabled = false }) => (
    <input
      name={label}
      disabled={disabled}
      type="text"
      defaultValue={defaultValue}
      onBlur={(event) => {
        if (event.target.value !== defaultValue) onBlur(event.target.value);
      }}
    />
  );
  return (
    <div className="App">
      <div>
        <Select
          value={selectedOption}
          onChange={handleChange}
          options={options}
        ></Select>
      </div>
      <div>
        <TextField
          label="at:"
          defaultValue={0}
          onBlur={(v) => {
            console.log(
              `I would fire a mutation with option`,
              selectedOption,
              ", value",
              v
            );
          }}
        ></TextField>
      </div>
    </div>
  );
}

export default App;
