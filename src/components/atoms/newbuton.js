import styled from 'styled-components';

const Newbutton = styled.a`
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
background: rgb(66, 195, 96);
border-bottom: 2px solid rgb(40, 167, 69);

&:hover{
  background: rgb(40, 167, 69);
  border-bottom: 2px solid rgb(32, 132, 55);
}
`;

export default Newbutton;