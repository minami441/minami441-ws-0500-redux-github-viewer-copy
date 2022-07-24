import React from 'react';

const selectstatus = (props) => {
  <select defaultValue={props.vals}>
    <option value="0">Open</option>
    <option value="1">Close</option>
  </select>
}
export default selectstatus
