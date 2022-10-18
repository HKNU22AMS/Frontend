import React from 'react';
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
  display: flex;
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
  width: 350px;
  height: 120px;
  padding: 10px;
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
  }
`;
const BubbleText = styled.div`
  height: 120px;
  word-break: break-all;
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
const SpeakerImgDiv = styled.div`
  height: 70px;
  width: 70px;
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

const BillSpeaker = ({ sp }) => {
  return (
    <div>
      <TitleText>발언자 목록</TitleText>
      <SpeakerContainer>
        {sp.map((speakers) => {
          return (
            <SpeakerDiv key={speakers.speaker_id}>
              <BubbleDiv>
                <BubbleText>{speakers.content}</BubbleText>
              </BubbleDiv>
              <Link to={`/speaker/${speakers.speaker_id}`}>
                <SpeakerImgDiv>
                  <img
                    alt="발언자 이미지"
                    src="/images/billUser.png"
                    width="70"
                    height="70"
                  />
                </SpeakerImgDiv>
              </Link>
              <NameDiv>{speakers.name}</NameDiv>
              <AffDiv>{speakers.affiliation}</AffDiv>
            </SpeakerDiv>
          );
        })}
      </SpeakerContainer>
    </div>
  );
};

export default BillSpeaker;
