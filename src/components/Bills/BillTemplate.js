import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import BillGraphs from './BillGraphs';
import BillName from './BillName';
import BillMain from './BillMain';
import BillSpeaker from './BillSpeaker';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import data from '../../data.json';
//speaker 사용하기 위함, 어차피 db join 해서 사용하면 아이디로 바로 접근 가능..

const PageContent = styled.div`
  font-family: 'Roboto';
`;

const BillTemplate = () => {
  const { Billid } = useParams();
  const [sp, setSp] = useState([]); // 임시 데이터
  const [billInfo, setBillInfo] = useState({
    id: -1,
    Graph: '',
    Speakers_id: [],
    comment_sum: '',
    keyword: '',
    main_content: '',
    minute_id: {
      assembly_num: -1,
      committee: '',
      meeting_class: '',
      meeting_date: '',
    },
    sumNum: -1,
    name: '',
  });

  const getBill = async (Billid) => {
    const res = await axios.get(`http://localhost:5000/api/bill/${Billid}`);
    console.log(res.data[0]);
    setBillInfo(res.data[0]);
  };

  useEffect(() => {
    getBill(Billid);
    setSp(data.speakers);
  }, [Billid]);

  return (
    <PageContent>
      <BillName billInfo={billInfo} />
      <BillGraphs billInfo={billInfo} />
      <BillMain billInfo={billInfo} />
      <BillSpeaker billInfo={billInfo} sp={sp} />
    </PageContent>
  );
};

export default BillTemplate;
