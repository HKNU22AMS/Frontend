import React from 'react';
import styled from 'styled-components';
import data from '../../data.json';

const TextDiv = styled.div`
  margin-top: 2%;
  margin-bottom: 5px;
  //padding-left: 18%;
  //padding-right: 7%;
  display: flex;
  justify-content: space-between;
  text-align: center;
  font-weight: bold;
  font-family: 'Roboto';
`;
const TotalText = styled.div`
  padding-left: 160px;
  width: 30%;
`;
const DisplayNum = styled.div`
  padding-right: 5px;
  width: 25%;
`;
const StyledSelect = styled.select`
  width: 100px;
  margin-left: 10px;
  border: 1px solid gray;
  border-radius: 5px;
  padding: 2px;
  font-size: 14px;
`;
const InformText = () => {
  return (
    <TextDiv>
      <TotalText>검색 결과: {data.bills.length}</TotalText>
      <DisplayNum>
        출력 건수
        <StyledSelect>
          <option>10개</option>
          <option>15개</option>
          <option>20개</option>
        </StyledSelect>
      </DisplayNum>
    </TextDiv>
  );
};

export default InformText;
