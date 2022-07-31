import styled from 'styled-components';
import Alerttext from '../atoms/alerttext.js';
import React from 'react';

const Alertarea = styled.div`
padding: 16px;
min-height: 100px;
`;

const Alert = (props) => {

return (
    <Alertarea>
    {props.error &&
        <Alerttext>{props.error.message}を入力してください</Alerttext>
    }
    </Alertarea>
    )
}

export default Alert