import styled from "styled-components";
import React, { useState } from "react";
import Issue from "../components/templates/Issue";
import PullRequest from "../pages/PullRequest";

const Container = styled.div``;

const Section = styled.div``;

const TabList = styled.div``;

const TabUlist = styled.ul`
  display: flex;
  width: 100%;
  padding: 0px 32px;
`;

const IssueTab = styled.li`
    font-size: 1.2rem;
    width: 100%;
    text-align: center;
    border-radius: 6px 6px 0px 0px;
    border-bottom: ${(props) =>
      props.isActive ? "" : "1px solid rgb(225, 228, 232)"};
    border-top: ${(props) =>
      props.isActive ? "1px solid rgb(225, 228, 232)" : ""};
    border-right: ${(props) =>
      props.isActive ? "1px solid rgb(225, 228, 232)" : ""};
    border-left: ${(props) =>
      props.isActive ? "1px solid rgb(225, 228, 232)" : ""};

    span {
      cursor: pointer;
      color: rgb(88, 96, 105);
      padding: 16px;
      display: block;
      width: 100%;
    }
}
`;

const PullReqTab = styled.li`
  font-size: 1.2rem;
  width: 100%;
  text-align: center;
  border-radius: 6px 6px 0px 0px;
  border-bottom: ${(props) =>
    props.isActive ? "1px solid rgb(225, 228, 232)" : ""};
  border-top: ${(props) =>
    props.isActive ? "" : "1px solid rgb(225, 228, 232)"};
  border-right: ${(props) =>
    props.isActive ? "" : "1px solid rgb(225, 228, 232)"};
  border-left: ${(props) =>
    props.isActive ? "" : "1px solid rgb(225, 228, 232)"};

  span {
    cursor: pointer;
    color: rgb(88, 96, 105);
    padding: 16px;
    display: block;
    width: 100%;
  }
`;

const IssueTags = styled.span`
  cursor: pointer;
  color: rgb(88, 96, 105);
  padding: 16px;
  display: block;
  width: 100%;
`;

const PullReqTags = styled.span`
  cursor: pointer;
  color: rgb(88, 96, 105);
  padding: 16px;
  display: block;
  width: 100%;
`;

function Home() {
  const [state, setState] = useState(true);
  return (
    <Container>
      <Section>
        <TabList>
          <TabUlist>
            <IssueTab onClick={() => setState(true)} isActive={state}>
              <IssueTags>Issue</IssueTags>
            </IssueTab>
            <PullReqTab onClick={() => setState(false)} isActive={state}>
              <PullReqTags>Pull Request</PullReqTags>
            </PullReqTab>
          </TabUlist>
        </TabList>
        {state ? <Issue /> : <PullRequest />}
      </Section>
    </Container>
  );
}

export default Home;
