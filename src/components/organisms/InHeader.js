import styled from "styled-components";
import React from "react";
import Buttons from "../atoms/Button";
import Search from "../molecules/SearchBlock";

const InHeader = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
`;

const IssueHeader = styled.h2``;

const ActionButton = styled.div`
  display: flex;
`;

const Inheaders = (props) => {
  return (
    <InHeader>
      <IssueHeader>Issue</IssueHeader>
      <Search type="input" placeholder="Issue名で検索" filter={props.filter} />
      <ActionButton>
        <Buttons success onClick={props.open}>
          New
        </Buttons>
        <Buttons warning onClick={props.delete}>
          Delete
        </Buttons>
      </ActionButton>
    </InHeader>
  );
};

export default Inheaders;
