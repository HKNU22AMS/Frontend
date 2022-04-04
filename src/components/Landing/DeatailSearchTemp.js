import React, { useState } from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DetailSearchDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 0.5fr 3fr);
  grid-template-rows: 0.75fr 0.75fr 1.5fr;
  gap: 10px 30px;
  margin-left: 0;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 5px;
  padding: 1%;
  width: 48%;
  height: 45%;
  color: white;
  z-index: 1;
  //box-shadow: 2px 5px 5px rgba(0, 0, 0, 0.4);
  box-shadow: 0px 13px 10px -1px rgba(0, 0, 0, 0.5);
`;
const StyledTitle = styled.span`
  font-family: 'Roboto';
  font-size: ${(props) => props.size || '19px'};
  padding-right: 15px;
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

const DetailSearchTemp = () => {
  const [startDate, setStartDate] = useState(false);
  const [endDate, setEndDate] = useState(false);

  const [assemNum, setAssemNum] = useState([]);
  const onClickAssem = (checked, value) => {
    if (checked) {
      setAssemNum([...assemNum, value]);
    } else {
      setAssemNum(assemNum.filter((el) => el !== value));
    }
  };
  const onClickAll = (ischecked, e) => {
    if (e === 'A') {
      ischecked ? setAssemNum([16, 17, 18, 19, 20, 21]) : setAssemNum([]);
    } else {
      ischecked
        ? setSelect([
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
        : setSelect([]);
    }
  };

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
  const [meetingClass /*, setMeetingClass*/] = useState(meetingArr);
  const [select, setSelect] = useState([]);

  /*console.log('대수 선택: ', assemNum);
  console.log('시작일: ', startDate);
  console.log('종료일: ', endDate);
  console.log('회의 구분: ', select);*/

  return (
    <DetailSearchDiv>
      <AssemblyText>
        <StyledTitle size="21px">대수</StyledTitle>
      </AssemblyText>
      <div style={{ display: 'flex' }}>
        <AssemblyDiv>
          <>
            <StyledAssemText>16대</StyledAssemText>
            <StyledAssemText>17대</StyledAssemText>
            <StyledAssemText>18대</StyledAssemText>
            <StyledAssemText>19대</StyledAssemText>
            <StyledAssemText>20대</StyledAssemText>
            <StyledAssemText>21대</StyledAssemText>
          </>
          <>
            <StyledAssemText size="12px">
              (2000~2004)
              <br />
              <input
                type="checkbox"
                onChange={(e) => {
                  onClickAssem(e.target.checked, 16);
                }}
              />
            </StyledAssemText>
            <StyledAssemText size="12px">
              (2004~2008)
              <br />
              <input
                type="checkbox"
                onChange={(e) => {
                  onClickAssem(e.target.checked, 17);
                }}
              />
            </StyledAssemText>
            <StyledAssemText size="12px">
              (2008~2012)
              <br />
              <input
                type="checkbox"
                onChange={(e) => {
                  onClickAssem(e.target.checked, 18);
                }}
              />
            </StyledAssemText>
            <StyledAssemText size="12px">
              (2012~2016)
              <br />
              <input
                type="checkbox"
                onChange={(e) => {
                  onClickAssem(e.target.checked, 19);
                }}
              />
            </StyledAssemText>
            <StyledAssemText size="12px">
              (2016~2020)
              <br />
              <input
                type="checkbox"
                onChange={(e) => {
                  onClickAssem(e.target.checked, 20);
                }}
              />
            </StyledAssemText>
            <StyledAssemText size="12px">
              (2020~)
              <br />
              <input
                type="checkbox"
                onChange={(e) => {
                  onClickAssem(e.target.checked, 21);
                }}
              />
            </StyledAssemText>
          </>
        </AssemblyDiv>
        <AllCheckDiv>
          <StyledAssemText>전체</StyledAssemText>
          <StyledAssemText paddingt="18%">
            <input
              type="checkbox"
              onChange={(e) => {
                onClickAll(e.target.checked, 'A');
              }}
            />
          </StyledAssemText>
        </AllCheckDiv>
      </div>
      <MeetingDateText>
        <StyledTitle>회의 기간</StyledTitle>
      </MeetingDateText>
      <MeetingDateDiv>
        <StyledDp
          dateFormat="yyyy년 MM월 dd일"
          showPopperArrow={false}
          selected={startDate}
          onChange={(date) => setStartDate(date)}
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
          onChange={(date) => setEndDate(date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          placeholderText="검색 종료 일자"
        />
      </MeetingDateDiv>
      <MeetingClassText>
        <StyledTitle>회의 구분</StyledTitle>
      </MeetingClassText>
      <div style={{ display: 'flex' }}>
        <MeetingClassDiv>
          {meetingClass.map((item) => (
            <ClassBtn
              key={item.id}
              onClick={() => {
                !select.includes(item.name)
                  ? setSelect((select) => [...select, item.name])
                  : setSelect(select.filter((button) => button !== item.name));
              }}
              clicked={select.includes(item.name) ? 'y' : ''}
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
              onClick={(e) => {
                onClickAll(e.target.checked, 'C');
              }}
            />
          </StyledAssemText>
        </AllCheckDiv>
      </div>
    </DetailSearchDiv>
  );
};

export default DetailSearchTemp;
