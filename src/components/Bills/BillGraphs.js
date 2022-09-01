import React from 'react';
import styled from 'styled-components';

const BillContentDiv = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 1.5fr 1fr;
  grid-template-areas:
    'a b c'
    'd b c';
  height: 300px;
  grid-gap: 2rem;
`;
const TitleText = styled.div`
  font-weight: bold;
  font-size: 1.2rem;
  margin-top: 5px;
  margin-bottom: 10px;
  //border-bottom: 1px dashed lightgray;
`;
const SpeakerNumDiv = styled.div`
  //border: 1px solid black;
  //height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  //justify-content: space-between;
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
const SumNumDiv = styled.div`
  //border-top: 1px solid black;
  //height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const KeywordDiv = styled.div`
  box-shadow: 0 0 20px -5px silver;
  border-radius: 10px;
  padding: 1%;
  height: 82%;
  //height: 255px;
`;
const GraphDiv = styled.div`
  box-shadow: 0 0 20px -5px silver;
  border-radius: 10px;
  padding: 1%;
  height: 82%;
  //height: 255px;
`;

const BillGraphs = ({ billInfo, sp }) => {
  return (
    <div>
      <BillContentDiv>
        <div style={{ gridArea: 'a' }}>
          <TitleText>발언 인원</TitleText>
          <SpeakerNumDiv>
            <NumberDiv>{sp.length}</NumberDiv>
            <UnitDiv>명</UnitDiv>
          </SpeakerNumDiv>
        </div>
        <div style={{ gridArea: 'b' }}>
          <TitleText>발언자별 발언 수</TitleText>
          <GraphDiv>{/*billInfo.graph */}</GraphDiv>
        </div>
        <div
          style={{
            gridArea: 'c',
            /*height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'space-between',*/
          }}
        >
          <TitleText>키워드 Top 5</TitleText>
          <KeywordDiv>{/*billInfo.keyword*/}</KeywordDiv>
        </div>
        <div style={{ gridArea: 'd' }}>
          <TitleText>요약된 글자수</TitleText>
          <SumNumDiv>
            <NumberDiv>{/*billInfo.sumNum */}</NumberDiv>
            <UnitDiv>자</UnitDiv>
          </SumNumDiv>
        </div>
      </BillContentDiv>
    </div>
  );
};

export default BillGraphs;
