import React from "react";

const Select = (props) => {
  return (
    <select onChange={props.onChange} defaultValue={props.default.toString()}>
      {props.options.map((option, key) => (
        <option value={option.label} key={key}>
          {option.label}
        </option>
      ))}
    </select>
  );
};
export default Select;
