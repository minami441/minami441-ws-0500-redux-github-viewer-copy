import styled from 'styled-components';
import React from 'react';
import Modaltitleinput from '../atoms/Titleform';

const Modaltitle = styled.div`
    padding: 16px;
`;

const Modaltitlelabel = styled.label`
  display: block;
  padding: 8px 0px;
`;

const Modaltitlearea = styled.div`
    border-radius: 6px;
    border: 1px solid rgb(225, 228, 232);
`;
const Titleblock = (props) => {

    return(
    <Modaltitle>
        <Modaltitlelabel>タイトル</Modaltitlelabel>
        <Modaltitlearea>
            <Modaltitleinput
            placeholder = {props.placeholder}
            defaultValue = {props.default}
            onChange = {props.onChange}
            />
        </Modaltitlearea>
    </Modaltitle>
    )
}

export default Titleblock