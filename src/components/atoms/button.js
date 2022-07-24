import styled from 'styled-components';

const Buttons = styled.a`
    cursor: pointer;
    display: block;
    width: 100%;
    text-align: center;
    padding: 4px 16px;
    margin: 4px;
    min-width: 100px;
    border-radius: 6px;
    border-bottom: ${(props) => props.borderbottom};
    font-size: 1rem;

    color: ${props => props.color};
    background: ${props => props.background};
    &:hover {
        background: ${props => props.hover_back};
        border-bottom: ${props => props.hover_border};
    }
`;

export default Buttons
