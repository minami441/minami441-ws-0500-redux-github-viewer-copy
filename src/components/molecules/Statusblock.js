import styled from "styled-components";
import React from "react";
import Select from "../atoms/Select";

const Statusarea = styled.div`
  padding: 16px;
`;

const Statuslabel = styled.label`
  display: block;
  padding: 8px 0px;
`;

const StatusBlock = (props) => {
  return (
    <Statusarea>
      <Statuslabel>{props.label}</Statuslabel>
      <Select
        onChange={props.onChange}
        default={props.default}
        options={props.options}
      />
    </Statusarea>
  );
};

export default StatusBlock;
