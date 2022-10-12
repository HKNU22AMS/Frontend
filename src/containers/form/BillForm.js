import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import BillTemplate from '../../components/Bills/BillTemplate';
import SearchBar from '../../components/common/SearchBar';

const BillContainer = styled.div`
  margin-left: 20%;
  margin-right: 20%;
  height: 100%;
`;

const BillForm = () => {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <SearchBar isLanding={false} placeh="검색어를 입력하세요." />
      <BillContainer>
        <BillTemplate billInfo={billInfo} sp={sp} />
      </BillContainer>
    </>
  );
};

export default BillForm;
