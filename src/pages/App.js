import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";
import React, { useState } from "react";
import Home from "../pages/Home";
import Issue from "../components/templates/Issue";
import Profile from "../pages/Profile";
import PullRequest from "../pages/PullRequest";
import "react-notifications/lib/notifications.css";
import { NotificationContainer } from "react-notifications";

const Header = styled.div`
  display: flex;
  padding: 16px;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  width: 100%;
  background: rgb(51, 51, 51);
  color: white;
`;

const GihtubViewer = styled.h1`
  white-space: nowrap;
  color: white;
`;

const UList = styled.ul`
  display: flex;
  width: 100%;
  padding: 0px 32px;

  li {
    margin-right: 16px;
    > a {
      color: white;
      font-size: 1.1rem;
    }
  }
`;

const List = styled.li``;

const Main = styled.div`
  max-width: 896px;
  margin: 0px auto;
  padding: 32px 16px;
`;

const ToggleTab = styled.li`
  a {
    display: block;
    color: rgb(51, 51, 51);
    padding: 8px;
    font-size: 1rem;
  }
  &:hover {
    background: rgb(3, 102, 214);
  }
  a:hover {
    color: white;
  }
`;

const ToggleLink = styled.div`
  position: absolute;
  margin-top: 16px;
  right: 16px;
  width: 200px;
  border-radius: 2px;
  padding: 8px 0px;
  background: white;
  color: rgb(51, 51, 51);
  box-shadow: rgb(51 51 51 / 15%) 1px 1px 4px 1px;
`;

const Toggle = styled.div`
  padding: 8px;
  font-size: 1.2rem;
`;

const Icon = styled.i`
  cursor: pointer;
`;

function App() {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
    document.removeEventListener("click", closeModal);
  }

  function changeModal(event) {
    setIsOpen(!isOpen);
    document.addEventListener("click", closeModal);
    event.stopPropagation();
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Header>
          <Link to="minami441-ws-0500-redux-github-viewer/">
            <GihtubViewer>Github Viewer</GihtubViewer>
          </Link>
          <UList>
            <List>
              <Link to="/issue">Issue</Link>
            </List>
            <List>
              <Link to="/pull-request">Pull Request</Link>
            </List>
          </UList>
          <Toggle>
            <Icon
              className="fa fa-bars"
              onClick={(event) => {
                changeModal(event);
              }}
            />
            {isOpen && (
              <ToggleLink>
                <ul>
                  <ToggleTab>
                    <Link to="minami441-ws-0500-redux-github-viewer/">Top</Link>
                  </ToggleTab>
                  <ToggleTab>
                    <Link to="/profile">Your Profile</Link>
                  </ToggleTab>
                  <ToggleTab>
                    <Link to="/issue">Issue</Link>
                  </ToggleTab>
                  <ToggleTab>
                    <Link to="/pull-request">Pull Request</Link>
                  </ToggleTab>
                </ul>
              </ToggleLink>
            )}
          </Toggle>
        </Header>
        <Main>
          <Routes>
            <Route
              path="minami441-ws-0500-redux-github-viewer/"
              index
              element={<Home />}
            />
            <Route path="profile" element={<Profile />} />
            <Route path="issue" element={<Issue />} />
            <Route path="pull-request" element={<PullRequest />} />
          </Routes>
        </Main>
      </BrowserRouter>
      <NotificationContainer />
    </div>
  );
}

export default App;
