import styled from "styled-components";
import React from "react";
import Input from "../atoms/Input";

const Block = styled.div`
  padding: 16px;
`;

const Label = styled.label`
  display: block;
  padding: 8px 0px;
`;

const BorderArea = styled.div`
  border-radius: 6px;
  border: 1px solid rgb(225, 228, 232);
`;
const TextBlock = (props) => {
  return (
    <Block>
      <Label>{props.label}</Label>
      <BorderArea>
        <Input
          type={props.valid}
          placeholder={props.placeholder}
          defaultValue={props.default}
          onChange={props.onChange}
        />
      </BorderArea>
    </Block>
  );
};

export default TextBlock;
