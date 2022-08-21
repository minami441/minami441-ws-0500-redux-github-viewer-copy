import styled from "styled-components";
import React from "react";
import Checkbox from "../atoms/Checkbox";

const Issuetable = styled.tr`
  cursor: pointer;
  &:hover {
    background: rgba(198, 218, 230, 0.25);
  }
`;

const Status = ["Open", "Close"];

const Issuetr = (props) => {
  return (
    <Issuetable onClick={props.openEdit}>
      <td>
        <Checkbox
          id={props.val.id}
          onClick={props.checkedbox}
          checked={props.checked}
        />
      </td>
      <td>{props.val.title}</td>
      <td>{Status[props.val.status]}</td>
      <td>{props.val.ctuser}</td>
      <td>{props.val.ctdate}</td>
      <td>{props.val.update}</td>
    </Issuetable>
  );
};

export default Issuetr;
