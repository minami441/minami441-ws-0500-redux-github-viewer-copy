import styled from 'styled-components';
import React from 'react';
import Buttons from '../atoms/button';
import Search from '../atoms/Searchinput';

const Inheader = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
`;

const Searchtext = styled.div`
    border-radius: 6px;
    border: 1px solid rgb(225, 228, 232);
`;

const Issueheader = styled.h2``;

const Searcharea = styled.div`
    padding: 8px 16px;
    display: flex;
    width: 100%;
    .text-field-container {
      width: 100%;
    }
`;

const ActionButton = styled.div`
    display: flex;
`;

const Inheaders = (props) => {

return (
    <Inheader>
        <Issueheader>Issue</Issueheader>
          <Searcharea>
            <Searchtext className='text-field-container'>
              <Search onChange={props.filter} type="input" placeholder="Issue名で検索"/>
            </Searchtext>
          </Searcharea>
          <ActionButton>
        <Buttons color="white" background="rgb(66, 195, 96)" borderbottom="2px solid rgb(40, 167, 69)" onClick={props.open} hover_back="rgb(40, 167, 69)" hover_border="2px solid rgb(32, 132, 55)">New</Buttons>
        <Buttons color="white" background="rgb(215, 58, 73)" borderbottom="2px solid rgb(175, 28, 42)" onClick={props.delete} hover_back="rgb(175, 28, 42)" hover_border="2px solid rgb(103, 16, 25)">Delete</Buttons>
        </ActionButton>
    </Inheader>
    )
}

export default Inheaders
