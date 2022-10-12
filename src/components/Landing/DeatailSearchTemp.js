import React, { useState } from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { searchStore } from '../../lib/store/searchStore';

const DetailSearchDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 0.5fr 3fr);
  grid-template-rows: 0.75fr 0.75fr 1.5fr;
  gap: 10px 30px;
  margin-left: 0;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 5px;
  padding: 1%;
  @media only screen and (max-width: 768px) {
    width: 79%;
  }
  width: 48%;
  color: white;
  z-index: 1;
  box-shadow: 0px 13px 10px -1px rgba(0, 0, 0, 0.5);
`;
const StyledTitle = styled.span`
  font-size: ${(props) => props.size || '19px'};
  padding-right: 13px;
  letter-spacing: -0.15rem;
`;
const StyledAssemText = styled.div`
  text-align: center;
  font-size: ${(props) => props.size || null};
  padding-top: ${(props) => props.paddingt || null};
  padding-bottom: ${(props) => props.paddingb || null};
`;
const AssemblyText = styled.div`
  border-right: 2px solid white;
  line-height: 55px;
  text-align: center;
`;
const AssemblyDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  color: white;
  width: 85%;
`;

const MeetingDateText = styled.div`
  color: white;
  border-right: 2px solid white;
  line-height: 55px;
  text-align: center;
`;
const MeetingDateDiv = styled.div`
  color: white;
  display: flex;
  text-align: center;
  align-items: center;
  margin-right: 15%;
`;
const StyledDp = styled(DatePicker)`
  border: 1px solid white;
  border-radius: 5px;
  font-size: 16px;
  padding: 2px 18px;
  text-align: center;
`;

const MeetingClassText = styled.div`
  color: white;
  border-right: 2px solid white;
  line-height: 90px;
  text-align: center;
`;
const MeetingClassDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr 1fr;
  gap: 0px 4px;
  color: white;
  align-items: center;
  width: 85%;
`;
const ClassBtn = styled.button`
  background: ${(props) =>
    props.clicked === 'y'
      ? 'rgba(255, 255, 255, 0.8)'
      : 'rgba(141, 156, 145, 0.64)'};
  color: ${(props) => (props.clicked === 'y' ? 'black' : 'white')};
  border-radius: 5px;
  border: none;
  height: 80%;
  letter-spacing: -0.15rem;
  font-size: ${(props) => props.size || '15px'};
  padding: 0;
  cursor: pointer;

  :hover {
    background: rgba(255, 255, 255, 0.6);
    color: black;
  }
`;
const AllCheckDiv = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  text-align: center;
  align-items: center;
  width: 13%;
  padding: 0;
`;

const assemArr = [
  { num: 16, year: '2000~2004' },
  { num: 17, year: '2004~2008' },
  { num: 18, year: '2008~2012' },
  { num: 19, year: '2012~2016' },
  { num: 20, year: '2016~2020' },
  { num: 21, year: '2020~' },
];
const meetingArr = [
  { id: 1, name: '본회의' },
  { id: 2, name: '상임위원회' },
  { id: 3, name: '특별위원회' },
  { id: 4, name: '예산특별결산위원회' },
  { id: 5, name: '국정감사' },
  { id: 6, name: '소위원회' },
  { id: 7, name: '국정조사' },
  { id: 8, name: '인사청문회' },
  { id: 9, name: '공청회' },
  { id: 10, name: '청문회' },
];

const DetailSearchTemp = () => {
  const { queryStore, setAN, setMC, setSD, setED } = searchStore();
  const [startDate, setStartDate] = useState(false);
  const [endDate, setEndDate] = useState(false);

  const setDate = (date) => {
    const y = date.getFullYear() + '/';
    const m = ('0' + (date.getMonth() + 1)).slice(-2) + '/';
    const d = ('0' + date.getDate()).slice(-2);
    const dS = y + m + d;
    return dS;
  };

  const onChangeSD = (date) => {
    setStartDate(date);
    setSD(setDate(date));
  };

  const onChangeED = (date) => {
    setEndDate(date);
    setED(setDate(date));
  };

  const onClickAssem = (checked, value) => {
    if (checked) {
      setAN([...queryStore.aN, value]);
    } else {
      setAN(queryStore.aN.filter((el) => el !== value));
    }
  };

  const onClickAll = (ischecked, e) => {
    if (e === 'A') {
      ischecked ? setAN([16, 17, 18, 19, 20, 21]) : setAN([]);
    } else {
      ischecked
        ? setMC([
            '본회의',
            '상임위원회',
            '특별위원회',
            '예산특별결산위원회',
            '국정감사',
            '소위원회',
            '국정조사',
            '인사청문회',
            '공청회',
            '청문회',
          ])
        : setMC([]);
    }
  };

  return (
    <DetailSearchDiv>
      <AssemblyText>
        <StyledTitle size="21px">대수</StyledTitle>
      </AssemblyText>
      <div style={{ display: 'flex' }}>
        <AssemblyDiv>
          {assemArr.map((item, idx) => (
            <StyledAssemText key={idx}>{item.num}대</StyledAssemText>
          ))}
          {assemArr.map((item, idx) => (
            <StyledAssemText size="12px" key={idx}>
              ({item.year})
              <br />
              <input
                type="checkbox"
                onChange={(e) => {
                  onClickAssem(e.target.checked, item.num);
                }}
                checked={queryStore.aN.includes(item.num) ? 'y' : ''}
              />
            </StyledAssemText>
          ))}
        </AssemblyDiv>
        <AllCheckDiv>
          <StyledAssemText>전체</StyledAssemText>
          <StyledAssemText paddingt="18%">
            <input
              type="checkbox"
              onChange={(e) => {
                onClickAll(e.target.checked, 'A');
              }}
              checked={
                queryStore.aN && queryStore.aN.length === assemArr.length
                  ? true
                  : false
              }
            />
          </StyledAssemText>
        </AllCheckDiv>
      </div>
      <MeetingDateText>
        <StyledTitle>회의기간</StyledTitle>
      </MeetingDateText>
      <MeetingDateDiv>
        <StyledDp
          dateFormat="yyyy년 MM월 dd일"
          showPopperArrow={false}
          selected={startDate}
          onChange={(date) => onChangeSD(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          placeholderText="검색 시작 일자"
        />
        <div style={{ width: '50%' }}>~</div>
        <StyledDp
          dateFormat="yyyy년 MM월 dd일"
          showPopperArrow={false}
          selected={endDate}
          onChange={(date) => onChangeED(date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          placeholderText="검색 종료 일자"
        />
      </MeetingDateDiv>
      <MeetingClassText>
        <StyledTitle>회의구분</StyledTitle>
      </MeetingClassText>
      <div style={{ display: 'flex' }}>
        <MeetingClassDiv>
          {meetingArr.map((item) => (
            <ClassBtn
              key={item.id}
              onClick={() => {
                !queryStore.mC.includes(item.name)
                  ? setMC([...queryStore.mC, item.name])
                  : setMC(
                      queryStore.mC.filter((button) => button !== item.name),
                    );
              }}
              clicked={queryStore.mC.includes(item.name) ? 'y' : ''}
              size={item.name === 4 ? '13px' : ''}
            >
              {item.name}
            </ClassBtn>
          ))}
        </MeetingClassDiv>
        <AllCheckDiv>
          <StyledAssemText paddingt="13%">전체</StyledAssemText>
          <StyledAssemText paddingt="25%">
            <input
              type="checkbox"
              onChange={(e) => {
                onClickAll(e.target.checked, 'C');
              }}
              checked={
                queryStore.mC && queryStore.mC.length === meetingArr.length
                  ? true
                  : false
              }
            />
          </StyledAssemText>
        </AllCheckDiv>
      </div>
    </DetailSearchDiv>
  );
};

export default DetailSearchTemp;
