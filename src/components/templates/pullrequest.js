import styled from 'styled-components';

const Maincontainer = styled.div`
  padding: 16px;
`;

const Mainlayout = styled.div`
  padding: 16px;
  margin-top: 128px;
`;

const Maintext = styled.h1`
  text-align: center;
`;

function Pullrequest() {
  return (
    <Maincontainer>
      <Mainlayout>
        <Maintext>Pullrequest</Maintext>
      </Mainlayout>
    </Maincontainer>
  );
}
export default Pullrequest;
