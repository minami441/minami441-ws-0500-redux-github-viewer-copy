import React from 'react';
import Modalcontentsdescriptionyextarea from '../atoms/description';
import styled from 'styled-components';

const Modalcontentsdescription = styled.div`
  padding: 16px;
`;

const Modalcontentsdescriptiontitle = styled.label`
  display: block;
  padding: 8px 0px;
`;

const Descriptionborder = styled.div`
    border-radius: 6px;
    border: 1px solid rgb(225, 228, 232);
`;


const Descriptionblock = (props) => {

    return(
        <Modalcontentsdescription>
            <Modalcontentsdescriptiontitle>説明</Modalcontentsdescriptiontitle>
            <Descriptionborder>
                <Modalcontentsdescriptionyextarea
                placeholder = {props.placeholder}
                defaultValue = {props.default}
                onChange = {props.onChange}
                >
                </Modalcontentsdescriptionyextarea>
            </Descriptionborder>
        </Modalcontentsdescription>
    )
}

export default Descriptionblock;
