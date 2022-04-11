import React from 'react';
import styled from 'styled-components';
import SearchBar from '../../components/Landing/SearchBar';
import DetailTab from '../../components/Searching/DetailTab';
import SearchingTemplate from '../../components/Searching/SearchingTemplate';

const SearchContentDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 7fr;
  margin-left: 7%;
  margin-right: 6%;
  margin-bottom: 4%;
  height: 650px;
`;

const SearchForm = () => {
  return (
    <>
      <SearchBar isLanding={false} placeh="검색어를 입력하세요." />
      <SearchContentDiv>
        <DetailTab />
        <SearchingTemplate />
      </SearchContentDiv>
    </>
  );
};

export default SearchForm;