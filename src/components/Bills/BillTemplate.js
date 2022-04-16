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
