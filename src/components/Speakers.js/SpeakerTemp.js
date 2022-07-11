import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import BillList from './BillList';
import SpeakersInf from './SpeakersInf';
import data from '../../data.json';

const SpeakerTemp = ({ speakerPosts }) => {
  const { Speakerid } = useParams();
  const [sp, setSp] = useState([]); // 임시 데이터

  useEffect(() => {
    setSp(data.speakers);
  }, [Speakerid]);

  return (
    <div>
      <SpeakersInf sp={sp} spid={Speakerid} />
      <BillList speakerPosts={speakerPosts} />
    </div>
  );
};

export default SpeakerTemp;
