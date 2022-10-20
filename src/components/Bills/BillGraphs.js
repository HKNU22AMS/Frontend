import React from 'react';
import styled from 'styled-components';

const BillContentDiv = styled.div`
  display: flex;
  width: 100%;
`;
const TitleText = styled.div`
  font-weight: bold;
  font-size: 1.2rem;
  margin-top: 5px;
  margin-bottom: 10px;
`;
const SpeakerNumDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  padding: 10px;
`;
const NumberDiv = styled.div`
  font-size: 4rem;
  font-weight: bold;
  color: #b1c8b6;
  text-shadow: 1px 2px 3px rgba(0, 0, 0, 0.6);
  text-align: center;
  letter-spacing: -5px;
  padding-bottom: 10px;
`;
const UnitDiv = styled.div`
  font-size: 1.5rem;
  padding-top: 20px;
  padding-left: 5px;
`;
const MainDiv = styled.div`
  display: flex;
  height: 100px;
  padding: 10px;
  box-shadow: 0 0 20px -5px silver;
  border-radius: 10px;
  background: none;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
const TopDiv = styled.div`
  color: ${(props) => props.col};
  font-size: ${(props) => props.size};
  font-weight: bold;
  letter-spacing: -5px;
`;

const BillGraphs = ({ TopList, sp }) => {
  return (
    <BillContentDiv>
      <div style={{ width: '50%' }}>
        <TitleText>발언 인원</TitleText>
        <SpeakerNumDiv>
          <NumberDiv>{sp.length}</NumberDiv>
          <UnitDiv>명</UnitDiv>
        </SpeakerNumDiv>
      </div>
      <div style={{ width: '100%' }}>
        <TitleText>Top 5</TitleText>
        <MainDiv>
          <TopDiv col="#727e55" size="2.7rem">
            {TopList[0]}{' '}
          </TopDiv>
          <TopDiv col="#727e65" size="2.4rem">
            {TopList[1]}{' '}
          </TopDiv>
          <TopDiv col="#727e80" size="2.1rem">
            {TopList[2]}{' '}
          </TopDiv>
          <TopDiv col="#b1c8a9" size="1.8rem">
            {TopList[3]}{' '}
          </TopDiv>
          <TopDiv col="#b1c8b6" size="1.5rem">
            {TopList[4]}{' '}
          </TopDiv>
        </MainDiv>
      </div>
    </BillContentDiv>
  );
};

export default BillGraphs;
