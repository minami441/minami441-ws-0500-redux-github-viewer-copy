import styled from 'styled-components';

const Deletebutton = styled.a`
  cursor: pointer;
  display: block;
  width: 100%;
  text-align: center;
  padding: 4px 16px;
  margin: 4px;
  min-width: 100px;
  border-radius: 6px;
  color: white;
  font-size: 1rem;
  background: rgb(215, 58, 73);
  border-bottom: 2px solid rgb(175, 28, 42);

  &:hover{
    background: rgb(175, 28, 42);
    border-bottom: 2px solid rgb(103, 16, 25);
  }
`;

export default Deletebutton;