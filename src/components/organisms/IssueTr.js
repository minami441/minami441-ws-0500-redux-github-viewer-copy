import styled from "styled-components";
import React from "react";
import CheckBox from "../atoms/CheckBox";

const IssueTable = styled.tr`
  cursor: pointer;
  &:hover {
    background: rgba(198, 218, 230, 0.25);
  }
`;

const Status = ["Open", "Close"];
const dummy = () => {};
const Issuetr = (props) => {
  return (
    <IssueTable onClick={props.openEdit}>
      <td>
        <CheckBox
          id={props.val.id}
          onClick={props.checkedbox}
          checked={props.checked}
          onChange={dummy}
        />
      </td>
      <td>
        <a href={props.val.url}>{props.val.title}</a>
      </td>
      <td>{Status[props.val.status]}</td>
      <td>{props.val.ctuser}</td>
      <td>{props.val.ctdate}</td>
      <td>{props.val.update}</td>
    </IssueTable>
  );
};

export default Issuetr;
