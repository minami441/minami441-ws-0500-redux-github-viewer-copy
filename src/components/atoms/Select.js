import React from "react";

const Select = (props) => {
  return (
    <select onChange={props.onChange} defaultValue={props.default.toString()}>
      {props.options.map((option) => (
        <option value={option.value}>{option.label}</option>
      ))}
    </select>
  );
};
export default Select;
