import styled from 'styled-components';
import React from 'react';
import Selectstatus from '../atoms/select_status';

const Statusarea = styled.div`
padding: 16px;
`;

const Statuslabel = styled.label`
display: block;
padding: 8px 0px;
`;

const Statusblock = (props) => {

return (
    <Statusarea>
        <Statuslabel>
            ステータス
        </Statuslabel>
        <Selectstatus onChange={props.onChange}/>
    </Statusarea>
    )
}
    
export default Statusblock