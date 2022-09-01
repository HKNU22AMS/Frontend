import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Search from '../../lib/icons/Search';
import { Link } from 'react-router-dom';
import { stringify } from 'qs';
import Plus from '../../lib/icons/Plus';
import DetailSearchTemp from '../Landing/DeatailSearchTemp';
import { searchStore } from '../../lib/store/searchStore';

const InputDiv = styled.div`
  display: flex;
  height: 60px;
  border: 2px solid black;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.7);
  align-items: flex-start;
  ${(props) => {
    return props.margin
      ? `margin-top: 2%;
      width: 50%;`
      : `margin-top: 1%;
      margin-left: 20%;
      width: 60%;`;
  }}
`;
const StyledInput = styled.input`
  margin-top: 5px;
  color: #656565;
  background: none;
  border: none;
  width: 90%;
  height: 50px;
  padding-left: 5%;
  font-size: 1.5rem;
  :focus {
    outline: none;
  }
`;
const SearchLink = styled(Link)`
  text-decoration: none;
  color: black;
  justify-content: center;
  display: flex;
  height: 100%;
  border: none;
  background: none;
  align-items: center;
  margin-right: 3%;
`;
const PlusBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  height: 25px;
  width: 25px;
  background: black;
  color: white;
  border: 0;
  outline: 0;
`;

const SearchBar = ({ isLanding, placeh }) => {
  const { queryStore, setQ, searchData } = searchStore();

  const [show, setShow] = useState(false);
  const [nextP, setNextP] = useState(false);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    if (!isLanding && queryStore.q && !searchText) {
      setSearchText(queryStore.q);
      setQ(queryStore.q);
      setNextP(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setQ(searchText);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchText]);

  const onChangeText = (e) => {
    setSearchText(e);
    e.length < 2 ? setNextP(false) : setNextP(true);
  };
  const onClickPlus = () => {
    setShow(!show);
  };

  return (
    <>
      <InputDiv margin={isLanding}>
        <StyledInput
          type="text"
          value={searchText}
          placeholder={placeh}
          onChange={(e) => {
            onChangeText(e.target.value);
          }}
        />
        {nextP ? (
          <SearchLink
            to={{
              pathname: '/search',
              search: `?${stringify(queryStore, { arrayFormat: 'bracket' })}`,
            }}
            onClick={() => {
              searchData();
            }}
          >
            <Search size="40" />
          </SearchLink>
        ) : (
          <div
            style={{
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              marginRight: '3%',
            }}
          >
            <Search
              size="40"
              onClick={() => {
                alert('2글자 이상 검색어를 입력해주세요.');
              }}
            />
          </div>
        )}
        {isLanding && (
          <PlusBtn>
            <Plus size="20" onClick={onClickPlus} />
          </PlusBtn>
        )}
      </InputDiv>
      {show ? <DetailSearchTemp /> : null}
    </>
  );
};

export default SearchBar;
