import React from 'react';
import styled from 'styled-components';
import { stringify } from 'qs';
import axios from 'axios';
import SearchBar from '../../components/common/SearchBar';
import DetailTab from '../../components/Searching/DetailTab';
import SearchingTemplate from '../../components/Searching/SearchingTemplate';
import { searchStore } from '../../lib/store/searchStore';

const SearchContentDiv = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 20px;
`;

const SearchForm = () => {
  const { posts, searchData, getCom } = searchStore();

  axios.defaults.paramsSerializer = (params) => {
    return stringify(params, { arrayFormat: 'repeat' });
  };

  return (
    <div>
      <SearchBar isLanding={false} placeh="검색어를 입력하세요." />
      <SearchContentDiv>
        <DetailTab searchData={searchData} posts={posts} getCom={getCom} />
        <SearchingTemplate />
      </SearchContentDiv>
    </div>
  );
};

export default SearchForm;
