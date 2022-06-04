import React from 'react';
import styled from 'styled-components';
import BillGraphs from './BillGraphs';
import BillName from './BillName';
import BillMain from './BillMain';
import BillSpeaker from './BillSpeaker';

const PageContent = styled.div`
  font-family: 'Roboto';
`;

const BillTemplate = () => {
  // router에 useParams로 id값 받아와서 axios.get 하기, 다른 컴포넌트에 값 넣어주기
  /*const DBget = () => {

  }*/
  return (
    <PageContent>
      <BillName />
      <BillGraphs />
      <BillMain />
      <BillSpeaker />
    </PageContent>
  );
};

export default BillTemplate;
