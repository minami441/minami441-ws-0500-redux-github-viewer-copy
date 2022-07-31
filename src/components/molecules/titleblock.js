import styled from 'styled-components';
import React from 'react';
import Modalcontentstitleinputtext from '../atoms/titleform';

const Modalcontentstitle = styled.div`
    padding: 16px;
`;

const Modalcontentstitlelabel = styled.label`
  display: block;
  padding: 8px 0px;
`;

const Modalcontentstitlearea = styled.div`
    border-radius: 6px;
    border: 1px solid rgb(225, 228, 232);
`;
const Titleblock = (props) => {

    return(
    <Modalcontentstitle>
        <Modalcontentstitlelabel>タイトル</Modalcontentstitlelabel>
        <Modalcontentstitlearea>
            <Modalcontentstitleinputtext 
            placeholder = {props.placeholder}
            defaultValue = {props.default}
            onChange = {props.onChange}
            />
        </Modalcontentstitlearea>
    </Modalcontentstitle>
    )
}

export default Titleblock