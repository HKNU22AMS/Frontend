import React from 'react';
import styled from 'styled-components';

const TitleText = styled.div`
  font-weight: bold;
  font-size: 1.2rem;
  margin-top: 3%;
  margin-bottom: 10px;
`;
const MainDiv = styled.div`
  height: 100px;
  padding: 10px;
  box-shadow: 0 0 20px -5px silver;
  border-radius: 10px;
  background: none;
`;

const BillMain = ({ billInfo }) => {
  return (
    <div>
      <TitleText>주요 내용</TitleText>
      <MainDiv>{billInfo.main_content}</MainDiv>
    </div>
  );
};

export default BillMain;
