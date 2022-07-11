import React, { useEffect } from 'react';
import styled from 'styled-components';
import qs from 'qs';
import axios from 'axios';
import SearchBar from '../../components/common/SearchBar';
import DetailTab from '../../components/Searching/DetailTab';
import SearchingTemplate from '../../components/Searching/SearchingTemplate';
import { searchStore } from '../../lib/store/searchStore';

const SearchContentDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 7fr;
  margin-left: 7%;
  margin-right: 6%;
  margin-bottom: 4%;
  height: 650px;
`;

const SearchForm = () => {
  const { queryStore, setPosts } = searchStore();

  axios.defaults.paramsSerializer = (params) => {
    return qs.stringify(params, { arrayFormat: 'repeat' });
  };

  /*useEffect(() => {
    console.log(queryStore);
  }, [queryStore]);*/

  const searchData = () => {
    axios
      .get(
        'http://localhost:5000/api/search',
        { params: queryStore },
        { withCredentials: true },
      )
      .then((res) => {
        console.log(res);
        setPosts(res.data);
      });
  };

  return (
    <div style={{ paddingBottom: '30px' }}>
      <SearchBar isLanding={false} placeh="검색어를 입력하세요." />
      <SearchContentDiv>
        <DetailTab searchData={searchData} />
        <SearchingTemplate searchData={searchData} />
      </SearchContentDiv>
    </div>
  );
};

export default SearchForm;
