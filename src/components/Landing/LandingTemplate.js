import React from 'react';
import styled from 'styled-components';
import SearchBar from '../common/SearchBar';

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

const LandingTemplate = () => {
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
        <SearchBar
          isLanding={true}
          placeh="검색어를 입력하세요. (2글자 이상 법안명)"
        />
      </LandingDiv>
    </>
  );
};

export default LandingTemplate;
