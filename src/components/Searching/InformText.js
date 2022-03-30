import React from 'react';
import styled from 'styled-components';
//import data from '../../data.json';

const TextDiv = styled.div`
  margin-top: 2%;
  margin-left: 22%;
  margin-right: 7%;
  margin-bottom: 5px;
  display: flex;
  font-weight: bold;
  justify-content: space-between;
`;
const TotalText = styled.div`
  left: 0;
  width: 20%;
`;
const DisplayNum = styled.div`
  right: 0;
  width: 15%;
`;
const InformText = () => {
  return (
    <TextDiv>
      <TotalText>검색 결과</TotalText>
      <DisplayNum>출력 건수</DisplayNum>
    </TextDiv>
  );
};

export default InformText;
