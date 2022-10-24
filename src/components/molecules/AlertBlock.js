import styled from "styled-components";
import AlertText from "../atoms/AlertText";
import React from "react";

const AlertArea = styled.div`
  padding: 16px;
  min-height: 100px;
`;

const Alert = (props) => {
  return (
    <AlertArea>
      {props.error && (
        <AlertText>{props.error.message}を入力してください</AlertText>
      )}
    </AlertArea>
  );
};

export default Alert;
