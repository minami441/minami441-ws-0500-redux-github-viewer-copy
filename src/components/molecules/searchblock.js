import styled from 'styled-components';
import { connect } from 'react-redux';
import React from 'react';
import Searchinput from '../atoms/searchinput';

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

function Search({filter_issue}){

  const onChangeSearch = (e) => {
    filter_issue(e.target.value)
  }

  return (
    <Searchblock>
      <Searchtext className="text-field-container">
        <Searchinput onChange={onChangeSearch} type="input" placeholder="issue名で検索" />
      </Searchtext>
    </Searchblock>
  );
};

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    filter_issue: (greptxt) => dispatch({type: 'filter_issue', payload: greptxt}),
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(Search);
