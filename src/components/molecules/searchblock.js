import styled from "styled-components";
import React from "react";
import Searchinput from "../atoms/Input";

const Searchblock = styled.div`
  padding: 8px 16px;
  display: flex;
  width: 100%;
  .text-field-container {
    width: 100%;
  }
`;

const Searchtext = styled.div`
  border-radius: 6px;
  border: 1px solid rgb(225, 228, 232);
`;

const Search = (props) => {
  return (
    <Searchblock>
      <Searchtext className="text-field-container">
        <Searchinput
          type={props.type}
          placeholder={props.placeholder}
          onChange={props.filter}
        />
      </Searchtext>
    </Searchblock>
  );
};

export default Search;
