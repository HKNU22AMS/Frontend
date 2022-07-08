import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import qs from 'qs';
import axios from 'axios';
import SearchBar from '../../components/common/SearchBar';
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
  const [posts, setPosts] = useState([]);
  const [query, setQuery] = useState({});
  const [queries, setQueries] = useState('');

  const location = useLocation();
  axios.defaults.paramsSerializer = (params) => {
    return qs.stringify(params, { arrayFormat: 'repeat' });
  };
  useEffect(() => {
    setQuery(
      qs.parse(location.search, {
        ignoreQueryPrefix: true,
      }),
    );
  }, [location.search]);

  useEffect(() => {
    setQueries(
      Object.entries(query)
        .map((item) => {
          item[1] = item[1] === false ? '' : item[1];
          return item.join('=').replace(/,/g, '&' + item[0] + '=');
        })
        .join('&'),
    );
  }, [query]);

  const searchData = () => {
    axios
      .get(
        'http://localhost:5000/api/search',
        { params: query },
        { withCredentials: true },
      )
      .then((res) => {
        console.log(res);
        setPosts(res.data);
      });
  };

  return (
    <div style={{ paddingBottom: '30px' }}>
      <SearchBar
        isLanding={false}
        placeh="검색어를 입력하세요."
        query={query}
      />
      <SearchContentDiv>
        <DetailTab
          query={query}
          setQuery={setQuery}
          searchData={searchData}
          queries={queries}
        />
        <SearchingTemplate
          query={query}
          posts={posts}
          searchData={searchData}
        />
      </SearchContentDiv>
    </div>
  );
};

export default SearchForm;
