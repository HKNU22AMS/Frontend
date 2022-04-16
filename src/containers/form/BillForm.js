import React from 'react';
import styled from 'styled-components';
import BillTemplate from '../../components/Bills/BillTemplate';
import SearchBar from '../../components/common/SearchBar';

const BillContainer = styled.div`
  margin-left: 7%;
  margin-right: 6%;
`;

const BillForm = () => {
  return (
    <>
      <SearchBar isLanding={false} placeh="검색어를 입력하세요." />
      <BillContainer>
        <BillTemplate />
      </BillContainer>
    </>
  );
};

export default BillForm;
