import styled, { css } from "styled-components";

const Buttons = styled.a`
  cursor: pointer;
  display: block;
  width: 100%;
  text-align: center;
  padding: 4px 16px;
  margin: 4px;
  min-width: 100px;
  border-radius: 6px;
  font-size: 1rem;
  ${(props) =>
    props.success &&
    css`
      color: white;
      background: rgb(66, 195, 96);
      border-bottom: 2px solid rgb(40, 167, 69);
      &:hover {
        background: rgb(40, 167, 69);
        border-bottom: 2px solid rgb(32, 132, 55);
      }
    `}
  ${(props) =>
    props.warning &&
    css`
      color: white;
      background: rgb(215, 58, 73);
      border-bottom: 2px solid rgb(175, 28, 42);
      &:hover {
        background: rgb(175, 28, 42);
        border-bottom: 2px solid rgb(103, 16, 25);
      }
    `}
`;

export default Buttons;
