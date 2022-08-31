import React, { useEffect } from 'react';
import styled from 'styled-components';
import qs from 'qs';
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
  const { queryStore, setPosts, posts } = searchStore();

  axios.defaults.paramsSerializer = (params) => {
    return qs.stringify(params, { arrayFormat: 'repeat' });
  };

  const searchData = async () => {
    try {
      const res = await axios.get(
        'http://localhost:5000/api/search',
        { params: queryStore },
        { withCredentials: true },
      );
      setPosts(res.data);
    } catch (err) {
      console.log(err);
      return 0;
    }
  };

  useEffect(() => {
    searchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queryStore.q]);

  return (
    <div>
      <SearchBar isLanding={false} placeh="검색어를 입력하세요." />
      <SearchContentDiv>
        <DetailTab searchData={searchData} posts={posts} />
        <SearchingTemplate searchData={searchData} />
      </SearchContentDiv>
    </div>
  );
};

export default SearchForm;
