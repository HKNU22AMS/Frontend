import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Search from '../../lib/icons/Search';
import { Link } from 'react-router-dom';
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
  font-family: 'Roboto';
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
  margin-top: 5px;
  justify-content: center;
  display: flex;
  width: 50px;
  height: 50px;
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
  const { queryStore, setQ } = searchStore();

  const [show, setShow] = useState(false);
  const [nextP, setNextP] = useState(false);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    if (!isLanding && queryStore.q && !searchText) {
      setQ(queryStore.q);
      setSearchText(queryStore.q);
    }
  }, []);

  useEffect(() => {
    setQ(searchText);
    console.log(queryStore);
  }, [searchText]);

  const onChangeText = (e) => {
    setSearchText(e);
    e.length < 2 ? setNextP(false) : setNextP(true);
  };
  const onClickPlus = () => {
    setShow(!show);
  };
  const onClickSB = () => {
    nextP ? setNextP(true) : alert('2글자 이상 검색어를 입력해주세요.');
  };

  const queries = Object.entries(queryStore)
    .map((item) => {
      item[1] = item[1] === false ? '' : item[1];
      return item.join('=').replace(/,/g, '&' + item[0] + '=');
    })
    .join('&');

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
        <SearchLink
          to={{
            pathname: nextP ? '/search' : window.location.pathname,
            search: nextP ? `?${queries}` : '',
          }}
          onClick={onClickSB}
          ///search?q=searchText&aN=assemNum&sD=startDate&eD=endDate&mC=meetingClass&cC=committeeClass&sP=speakers
        >
          <Search size="40" />
        </SearchLink>
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
