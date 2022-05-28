import styled from 'styled-components';

const Searchblock = styled.div`
  padding: 8px 16px;
  display: flex;
  width: 100%;
  .text-field-container {
    width: 100%;
  }
`;

const Searchinput = styled.input`
  padding: 8px;
  border: none;
  outline: none;
  background: none;
  font-size: 1rem;
  width: 100%;
`;

const Searchtext = styled.div`
  border-radius: 6px;
  border: 1px solid rgb(225, 228, 232);
`;

const Search = () => {
  return (
    <Searchblock>
      <Searchtext className="text-field-container">
        <Searchinput type="input" placeholder="issue名で検索" />
      </Searchtext>
    </Searchblock>
  );
};

export default Search();
