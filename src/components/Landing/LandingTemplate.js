import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Plus from '../../lib/icons/Plus';
import Search from '../../lib/icons/Search';
import DetailSearchTemp from './DeatailSearchTemp';

const LogoInfText = styled.div`
  font-family: 'ABeeZee';
  font-weight: 200;
  width: 100%;
  align-items: center;
  text-align: center;
  font-size: 20px;
`;
const LandingDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 500px;
  z-index: -1;
  align-items: center;
  padding-top: 6%;
`;
const InfText = styled.div`
  font-family: 'ABeeZee';
  font-weight: bold;
  width: 100%;
  text-align: center;
  font-size: 24px;
`;
const InputDiv = styled.div`
  display: flex;
  margin-top: 2%;
  width: 50%;
  height: 60px;
  border: 2px solid black;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.7);
  align-items: flex-start;
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

const LandingTemplate = () => {
  const [show, setShow] = useState(false);
  const onClickPlus = () => {
    setShow(!show);
  };

  return (
    <>
      <LogoInfText>
        Assembly Minutes Summary
        <br />
        국회 회의록 요약집
      </LogoInfText>
      <LandingDiv>
        <InfText>
          대한민국 국회 회의록을 요약하여 제공합니다.
          <br />
          법안 중심의 보기 쉽게 정리된 회의록을 만나보세요.
        </InfText>
        <InputDiv>
          <StyledInput
            type="text"
            placeholder="검색어를 입력하세요. (안건명, 발언자명, 발언 내용)"
          />
          <SearchBtn to="/search">
            <Search size="40" />
          </SearchBtn>
          <PlusBtn>
            <Plus size="20" onClick={onClickPlus} />
          </PlusBtn>
        </InputDiv>
        {show ? <DetailSearchTemp /> : null}
      </LandingDiv>
    </>
  );
};

export default LandingTemplate;
