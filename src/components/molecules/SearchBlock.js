import styled from "styled-components";
import React from "react";
import Searchinput from "../atoms/Input";

const SearchBlock = styled.div`
  padding: 8px 16px;
  display: flex;
  width: 100%;
  .text-field-container {
    width: 100%;
  }
`;

const SearchText = styled.div`
  border-radius: 6px;
  border: 1px solid rgb(225, 228, 232);
`;

const Search = (props) => {
  return (
    <SearchBlock>
      <SearchText className="text-field-container">
        <Searchinput
          type={props.type}
          placeholder={props.placeholder}
          onChange={props.filter}
        />
      </SearchText>
    </SearchBlock>
  );
};

export default Search;
