import React, { useState } from "react";
import Select from "react-select";

const Selecting = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [val, setVal] = useState(0);
  const handleChange = (s) => {
    setSelectedOption(s);
    console.log(`I would fire a mutation with option`, s, ", value", val);
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
          defaultValue={val}
          onBlur={(v) => {
            setVal(v);
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
};

export default Selecting;
