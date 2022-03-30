import React from 'react';
import styled from 'styled-components';

const TabDiv = styled.div`
  border: 1px solid black;
  height: 650px;
  width: 230px;
  margin-right: 20px;
  box-shadow: 2px 5px 5px rgba(0, 0, 0, 0.4);
`;
const DetailTab = () => {
  return <TabDiv>상세 검색 탭</TabDiv>;
};

export default DetailTab;
