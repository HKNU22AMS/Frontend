import React from 'react';
import styled from 'styled-components';
import SearchBar from '../../components/common/SearchBar';
import SpeakerTemp from '../../components/Speakers.js/SpeakerTemp';

const SpeakerContainer = styled.div`
  margin-top: 3%;
  margin-left: 20%;
  margin-right: 20%;
`;

const SpeakerForm = () => {
  return (
    <div style={{ paddingBottom: '20px' }}>
      <SearchBar />
      <SpeakerContainer>
        <SpeakerTemp />
      </SpeakerContainer>
    </div>
  );
};

export default SpeakerForm;
