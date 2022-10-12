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
  height: 100px;
  padding: 10px;
  box-shadow: 0 0 20px -5px silver;
  border-radius: 10px;
  background: none;
`;

const BillGraphs = ({ billInfo, sp }) => {
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
        <TitleText>주요 내용</TitleText>
        <MainDiv>{billInfo.main_content}</MainDiv>
      </div>
    </BillContentDiv>
  );
};

export default BillGraphs;
