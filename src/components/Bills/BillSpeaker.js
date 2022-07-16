import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const TitleText = styled.div`
  font-weight: bold;
  font-size: 1.2rem;
  margin-top: 3%;
  margin-bottom: 10px;
`;
const SpeakerContainer = styled.div`
  height: 320px;
  margin-bottom: 4%;
  padding: 2%;
  box-shadow: 0 0 20px -5px silver;
  border-radius: 10px;
  background: none;
  //text-align: center;
  display: flex;
  //flex-direction: column;
  overflow: auto;
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-thumb {
    height: 5px;
    background-color: #727e75;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-track {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;
const SpeakerDiv = styled.div`
  //width: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-right: 2.5%;
  padding-left: 0.5%;
`;
const BubbleDiv = styled.div`
  position: relative;
  background: #d0dbd3;
  border-radius: 10px;
  width: 450px;
  height: 125px;
  padding: 5px;
  margin-bottom: 1em;

  :after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 0;
    border: 15px solid transparent;
    border-top-color: #d0dbd3;
    border-bottom: 0;
    margin-left: -15px;
    margin-bottom: -15px;
    /*border: 1em solid transparent;
    border-top-color: #d0dbd3;
    border-bottom: 0;
    border-left: 0;
    margin-left: -0.5em;
    margin-bottom: -1em;*/
  }
`;

const SpeakerImgDiv = styled.div`
  height: 70px;
  width: 70px;
  border: 1px solid black;
  border-radius: 100%;
  margin-top: 20px;
  margin-bottom: 10px;
`;
const NameDiv = styled.div`
  font-weight: bold;
  font-size: 1.2rem;
  letter-spacing: 2px;
  padding: 3px;
`;
const AffDiv = styled.div`
  font-size: 1rem;
  letter-spacing: -2px;
  padding-top: 3px;
`;

const BillSpeaker = ({ billInfo, sp }) => {
  const [billSps, setBillSps] = useState([]);

  useEffect(() => {
    setBillSps(sp && sp.filter((s) => billInfo.Speakers_id.includes(s.id)));
  }, [sp, billInfo.Speakers_id]);

  return (
    <div>
      <TitleText>발언자 목록</TitleText>
      <SpeakerContainer>
        {billSps &&
          billSps.map((billSp) => {
            return (
              <SpeakerDiv key={billSp.id}>
                <BubbleDiv>내용</BubbleDiv>
                <Link to={`/speaker/${billSp.id}`}>
                  <SpeakerImgDiv>
                    <img
                      alt="발언자 이미지"
                      src="/images/billUser.png"
                      width="70"
                      height="70"
                    />
                  </SpeakerImgDiv>
                </Link>
                <NameDiv>{billSp.name}</NameDiv>
                <AffDiv>{billSp.affiliation}</AffDiv>
              </SpeakerDiv>
            );
          })}
      </SpeakerContainer>
    </div>
  );
};

export default BillSpeaker;
