import React from 'react';
import Modaldescriptionyextarea from '../atoms/Description';
import styled from 'styled-components';

const Modaldescription = styled.div`
  padding: 16px;
`;

const Modaldescriptiontitle = styled.label`
  display: block;
  padding: 8px 0px;
`;

const Descriptionborder = styled.div`
    border-radius: 6px;
    border: 1px solid rgb(225, 228, 232);
`;


const Descriptionblock = (props) => {

    return(
        <Modaldescription>
            <Modaldescriptiontitle>説明</Modaldescriptiontitle>
            <Descriptionborder>
                <Modaldescriptionyextarea
                placeholder = {props.placeholder}
                defaultValue = {props.default}
                onChange = {props.onChange}
                >
                </Modaldescriptionyextarea>
            </Descriptionborder>
        </Modaldescription>
    )
}

export default Descriptionblock;
