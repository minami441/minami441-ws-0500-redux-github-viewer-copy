import styled from 'styled-components';
import Buttons from '../atoms/Button';
import React from 'react';

const ActionButton = styled.div`
    display: flex;
`;

const ActionButtons = (props) => {
  
    return(
    <ActionButton>
        <Buttons color="white" background="rgb(66, 195, 96)" borderbottom="2px solid rgb(40, 167, 69)" onClick={props.open} hover_back="rgb(40, 167, 69)" hover_border="2px solid rgb(32, 132, 55)">New</Buttons>
        <Buttons color="white" background="rgb(215, 58, 73)" borderbottom="2px solid rgb(175, 28, 42)" onClick={props.delete} >Delete</Buttons>
    </ActionButton>
    )
}
  
  export default ActionButtons;
  