import React, { useState } from 'react';
import styled from 'styled-components';
import Search from '../../lib/icons/Search';
import { Link } from 'react-router-dom';
import Plus from '../../lib/icons/Plus';
import DetailSearchTemp from './DeatailSearchTemp';

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
const SearchBtn = styled(Link)`
  text-decoration: none;
  color: black;
  margin-top: 5px;
  display: flex;
  width: 50px;
  height: 50px;
  border: none;
  background: none;
  align-items: center;
  justify-content: center;
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

const SearchBar = ({ isLanding }) => {
  const [show, setShow] = useState(false);
  const onClickPlus = () => {
    setShow(!show);
  };
  return (
    <>
      <InputDiv margin={isLanding}>
        <StyledInput
          type="text"
          placeholder="검색어를 입력하세요. (안건명, 발언자명, 발언 내용)"
        />
        <SearchBtn to="/search">
          <Search size="40" />
        </SearchBtn>
        {isLanding ? (
          <PlusBtn>
            <Plus size="20" onClick={onClickPlus} />
          </PlusBtn>
        ) : null}
      </InputDiv>
      {show ? <DetailSearchTemp /> : null}
    </>
  );
};

export default SearchBar;
