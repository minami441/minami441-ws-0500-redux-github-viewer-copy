import styled from "styled-components";

const MainContainer = styled.div`
  padding: 16px;
`;

const MainLayout = styled.div`
  padding: 16px;
  margin-top: 128px;
`;

const MainText = styled.h1`
  text-align: center;
`;

function Pullrequest() {
  return (
    <MainContainer>
      <MainLayout>
        <MainText>Pullrequest</MainText>
      </MainLayout>
    </MainContainer>
  );
}
export default Pullrequest;
