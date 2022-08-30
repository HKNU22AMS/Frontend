import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import BillGraphs from './BillGraphs';
import BillName from './BillName';
import BillMain from './BillMain';
import BillSpeaker from './BillSpeaker';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const PageContent = styled.div`
  font-family: 'Roboto';
`;

const BillTemplate = () => {
  const { Billid } = useParams();
  const [sp, setSp] = useState([]); // 임시 데이터
  const [billInfo, setBI] = useState([]);

  const getBill = async (Billid) => {
    try {
      const res = await axios.get(`http://localhost:5000/api/bill/${Billid}`);
      setBI(res.data.b[0]);
      setSp(res.data.s);
    } catch (err) {
      console.log(err);
      return 0;
    }
  };

  useEffect(() => {
    getBill(Billid);
  }, []);

  return (
    <>
      {billInfo && sp && (
        <PageContent>
          <BillName billInfo={billInfo} />
          <BillGraphs billInfo={billInfo} sp={sp} />
          <BillMain billInfo={billInfo} />
          <BillSpeaker billInfo={billInfo} sp={sp} />
        </PageContent>
      )}
    </>
  );
};

export default BillTemplate;
