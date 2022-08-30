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
  const [sp, setSp] = useState([]);
  const [bills, setBills] = useState([]);

  const getSpeaker = async (Speakerid) => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/speaker/${Speakerid}`,
      );
      setBills(res.data.b);
      setSp(res.data.s[0]);
    } catch (err) {
      console.log(err);
      return 0;
    }
  };

  useEffect(() => {
    getSpeaker(Speakerid);
  }, []);

  return (
    <div style={{ paddingBottom: '20px' }}>
      <SearchBar />
      <SpeakerContainer>
        <SpeakerTemp sp={sp} bills={bills} />
      </SpeakerContainer>
    </div>
  );
};

export default SpeakerForm;
