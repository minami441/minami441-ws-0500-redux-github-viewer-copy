import styled from "styled-components";
import React from "react";
import Select from "../atoms/Select";

const StatusArea = styled.div`
  padding: 16px;
`;

const StatusLabel = styled.label`
  display: block;
  padding: 8px 0px;
`;

const StatusBlock = (props) => {
  return (
    <StatusArea>
      <StatusLabel>{props.label}</StatusLabel>
      <Select
        onChange={props.onChange}
        default={props.default}
        options={props.options}
      />
    </StatusArea>
  );
};

export default StatusBlock;
