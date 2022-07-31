import React from 'react';

const Selectstatus = (props) => {

  return (
    <select 
    value={props.default}
    onChange={props.onChange}
    >
      <option value="0">Open</option>
      <option value="1">Close</option>
    </select>
  )
}
export default Selectstatus
