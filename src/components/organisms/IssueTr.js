import styled from "styled-components";
import React from "react";
import CheckBox from "../atoms/CheckBox";

const IssueTable = styled.tr`
  cursor: pointer;
  &:hover {
    background: rgba(198, 218, 230, 0.25);
  }
`;

const dummy = () => {};
function link(e, link) {
  e.stopPropagation();
  document.location.href = link;
}
const Issuetr = (props) => {
  return (
    <IssueTable onClick={props.openEdit}>
      <td>
        <CheckBox
          number={props.val.number}
          onClick={props.checkedbox}
          checked={props.checked}
          onChange={dummy}
        />
      </td>
      <td>
        <a onClick={(e) => link(e, props.val.html_url.toString())}>
          {props.val.title}
        </a>
      </td>
      <td>{props.val.state}</td>
      <td>{props.val.ctuser}</td>
      <td>{props.val.created_at}</td>
      <td>{props.val.updated_at}</td>
    </IssueTable>
  );
};

export default Issuetr;
