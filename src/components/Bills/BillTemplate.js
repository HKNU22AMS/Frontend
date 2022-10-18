import React from 'react';
import styled from 'styled-components';
import BillGraphs from './BillGraphs';
import BillName from './BillName';
import BillSpeaker from './BillSpeaker';

const PageContent = styled.div``;

const BillTemplate = ({ billInfo, sp }) => {
  return (
    <>
      {billInfo && sp && (
        <PageContent>
          <BillName billInfo={billInfo} />
          <BillGraphs billInfo={billInfo} sp={sp} />
          <BillSpeaker billInfo={billInfo} sp={sp} />
        </PageContent>
      )}
    </>
  );
};

export default BillTemplate;
