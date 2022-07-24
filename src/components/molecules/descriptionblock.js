import React from 'react';
import Modalcontentsdescriptionyextarea from '../atoms/description';
import styled from 'styled-components';

const Descriptionborder = styled.div`
    border-radius: 6px;
    border: 1px solid rgb(225, 228, 232);
`;

const Descriptionblock = (props) => {

    return(
        <Descriptionborder>
            <Modalcontentsdescriptionyextarea
            placeholder="説明を入力してください"
            defaultValue={props.default}
            onChange={props.onChange}
            >
            </Modalcontentsdescriptionyextarea>
        </Descriptionborder>
    )
}

export default Descriptionblock;
