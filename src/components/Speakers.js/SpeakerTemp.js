import React from 'react';
//import styled from 'styled-components';
import BillList from './BillList';
import SpeakersInf from './SpeakersInf';

/*const PageDiv = styled.div`
  margin-top: 2%;
  width: 100%;
  text-align: center;
  font-size: 2rem;
`;*/
const SpeakerTemp = () => {
  /*const DBget = () => {

  }*/
  return (
    <div>
      <SpeakersInf />
      <BillList />
      {/*<PageDiv>[ 페이지네이션 ]</PageDiv>*/}
    </div>
  );
};

export default SpeakerTemp;
