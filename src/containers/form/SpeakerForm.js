import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import SearchBar from '../../components/common/SearchBar';
import SpeakerTemp from '../../components/Speakers.js/SpeakerTemp';
import axios from 'axios';
import { searchStore } from '../../lib/store/searchStore';
const SpeakerContainer = styled.div`
  margin-top: 3%;
  margin-left: 20%;
  margin-right: 20%;
`;

const SpeakerForm = () => {
  const { Speakerid } = useParams();
  const { speakerPosts, setSpeakerPosts } = searchStore();

  const getSpeaker = async (Speakerid) => {
    const res = await axios.get(
      `http://localhost:5000/api/speaker/${Speakerid}`,
    );
    setSpeakerPosts(res.data);
  };

  useEffect(() => {
    getSpeaker(Speakerid);
  }, [Speakerid]);

  return (
    <div style={{ paddingBottom: '20px' }}>
      <SearchBar />
      <SpeakerContainer>
        <SpeakerTemp speakerPosts={speakerPosts} />
      </SpeakerContainer>
    </div>
  );
};

export default SpeakerForm;
