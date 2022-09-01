import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Triangle from '../../lib/icons/Triangle';
import data from '../../data.json';
import Search from '../../lib/icons/Search';
import { searchStore } from '../../lib/store/searchStore';

const TabDiv = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  //height: auto;
  //height: 655px;
  width: 230px;
  margin-right: 15px;
  margin-top: 60px;
  box-shadow: 2px 5px 5px rgba(0, 0, 0, 0.4);
  font-family: 'Roboto';
  overflow: hidden;
`;
const TitleToggleDiv = styled.div`
  display: flex;
  height: 5%;
  background: #d0dbd3;
  align-items: center;
  text-align: center;
  justify-items: center;
  justify-content: space-between;
  font-size: 20px;
  font-weight: bold;
  padding-left: ${(props) => props.pl};
  letter-spacing: -0.15rem;
`;
const MeetingClassDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 160px;
  overflow: auto;
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-thumb {
    height: 15%;
    background-color: #727e75;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-track {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;
const CheckboxDiv = styled.div`
  padding: 5px;
  padding-left: 15px;
`;
const CommitteeClassDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 220px;
  overflow: auto;
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-thumb {
    height: 15%;
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
  height: 140px;
`;
const BtnDiv = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const BasicBtn = styled(Link)`
  display: flex;
  justify-content: center;
  margin-right: 5px;
  margin-bottom: 5px;
  margin-top: 5px;
  text-decoration: none;
  color: black;
  background: white;
  width: 30%;
  cursor: pointer;
  font-size: 15px;
  border: 1px solid lightgrey;
  border-radius: 5px;
  :hover {
    color: white;
    ${(props) => {
      return props.btntype === 'apply'
        ? `background: rgba(40, 130, 255, 0.7);
        `
        : `background: rgba(255, 40, 40, 0.7);
        `;
    }}
  }
`;
const SearchBox = styled.div`
  background: white;
  border: 2px solid black;
  height: 30px;
  display: flex;
  align-items: flex-start;
  border-radius: 5px;
  margin: 5px;
`;
const SearchInput = styled.input`
  margin-top: 5px;
  padding-left: 10px;
  border: none;
  width: 80%;
  background: none;
  font-size: 15px;
  :focus {
    outline: none;
  }
`;
const SpeakerSearchBtn = styled.button`
  padding: 2.5px;
  margin-top: 3px;
  background: none;
  border: none;
`;
const SpeakerNamesDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  text-align: center;
  overflow: auto;
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-thumb {
    height: 15%;
    background-color: #727e75;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-track {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;
const SpeakerName = styled.div`
  border: 1px solid gray;
  border-radius: 5px;
  margin: 3px;
  :hover {
    background: #727e75;
    color: white;
    font-weight: bold;
  }
`;

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

const DetailTab = ({ searchData }) => {
  const { queryStore, setMC, setCC, setSP } = searchStore();

  const [toggleBtn1, setToggleBtn1] = useState(true);
  const [toggleBtn2, setToggleBtn2] = useState(true);
  const [toggleBtn3, setToggleBtn3] = useState(true);

  const [committeeArr, setCommitteeArr] = useState([]);
  const [speakerName, setSpeakerName] = useState('');

  const queries = Object.entries(queryStore)
    .map((item) => {
      item[1] = item[1] === false ? '' : item[1];
      return item.join('=').replace(/,/g, '&' + item[0] + '=');
    })
    .join('&');

  const onClickTriangle = (id) => {
    id === 1
      ? setToggleBtn1(!toggleBtn1)
      : id === 2
      ? setToggleBtn2(!toggleBtn2)
      : setToggleBtn3(!toggleBtn3);
  };

  useEffect(() => {
    if (queryStore.mC.length === 0) {
      setMC('');
    } else if (queryStore.cC.length === 0) {
      setCC('');
    } else if (queryStore.sP.length === 0) {
      setSP('');
    }
  }, [queryStore.mC, queryStore.cC, queryStore.sP]);

  /*useEffect(() => { // 발언자 검색 테스트용
    let ind = 0;
    let ind2 = 0;
    let result2 = [];
    let tmp2 = [];
    const tmp =
      queryStore.sP &&
      queryStore.sP.map((i) => data.speakers.filter((s) => s.name === i));
    for (ind = 0; ind < queryStore.sP.length; ind++) {
      for (ind2 = 0; ind2 < tmp[ind].length; ind2++) {
        tmp2 = data.bills.filter((bill) =>
          bill.Speakers_id.includes(tmp[ind][ind2].id),
        );
        result2 = [...result2, tmp2];
      }
    }
    console.log(tmp);
    console.log('r', result2);
  }, []);*/

  useEffect(() => {
    data.bills.map((bill) =>
      committeeArr.includes(bill.minute_id.committee)
        ? ''
        : setCommitteeArr([...committeeArr, bill.minute_id.committee]),
    );
  }, [committeeArr]);

  const onChangeSelect = (com, setCom, checked, value) => {
    if (checked) {
      setCom([...com, value]);
    } else {
      setCom(com.filter((el) => el !== value));
    }
  };

  const onChangeSpeaker = (e) => {
    setSpeakerName(e.target.value);
  };
  const onClickSpeaker = () => {
    queryStore.sP.includes(speakerName)
      ? alert('이미 검색된 이름입니다.')
      : setSP([...queryStore.sP, speakerName]);
  };
  const onClickDelete = (id) => {
    setSP(queryStore.sP.filter((el) => el !== queryStore.sP[id]));
  };

  const onClickApply = () => {
    console.log('적용');
    console.log(queryStore);
    searchData();
  };
  const onClickInitial = () => {
    console.log('초기화');
    console.log(queryStore);

    setMC('');
    setCC('');
    setSP('');
    searchData();
  };
  return (
    <div>
      <TabDiv>
        <TitleToggleDiv pl="33%">
          회의 구분
          <Triangle
            size="20"
            upsidedown={toggleBtn1.toString()}
            onClick={() => onClickTriangle(1)}
          />
        </TitleToggleDiv>
        {toggleBtn1 && (
          <MeetingClassDiv>
            {meetingArr.map((item) => (
              <CheckboxDiv key={item.id}>
                <input
                  id={item.id}
                  type="checkbox"
                  onChange={(e) =>
                    onChangeSelect(
                      queryStore.mC,
                      setMC,
                      e.target.checked,
                      item.name,
                    )
                  }
                  checked={
                    queryStore.mC && queryStore.mC.includes(item.name)
                      ? true
                      : false
                  }
                />{' '}
                {item.name}
              </CheckboxDiv>
            ))}
          </MeetingClassDiv>
        )}
        <TitleToggleDiv pl="29%">
          위원회 구분
          <Triangle
            size="20"
            upsidedown={toggleBtn2.toString()}
            onClick={() => onClickTriangle(2)}
          />
        </TitleToggleDiv>
        {toggleBtn2 && (
          <CommitteeClassDiv>
            {committeeArr.map((item, index) => (
              <CheckboxDiv key={index}>
                <input
                  type="checkbox"
                  onChange={(e) =>
                    onChangeSelect(queryStore.cC, setCC, e.target.checked, item)
                  }
                  checked={
                    queryStore.cC && queryStore.cC.includes(item) ? true : false
                  }
                />{' '}
                {item}
              </CheckboxDiv>
            ))}
          </CommitteeClassDiv>
        )}
        <TitleToggleDiv pl="38%">
          발언자
          <Triangle
            size="20"
            upsidedown={toggleBtn3.toString()}
            onClick={() => onClickTriangle(3)}
          />
        </TitleToggleDiv>
        {toggleBtn3 && (
          <SpeakerDiv>
            <SearchBox>
              <SearchInput
                placeholder="이름을 입력하세요."
                value={speakerName}
                onChange={(e) => onChangeSpeaker(e)}
              />{' '}
              <SpeakerSearchBtn onClick={() => onClickSpeaker()}>
                <Search size="20" />
              </SpeakerSearchBtn>
            </SearchBox>
            <SpeakerNamesDiv>
              {queryStore.sP &&
                queryStore.sP.map((name, index) => (
                  <div
                    key={index}
                    value={name}
                    onClick={() => onClickDelete(index)}
                  >
                    <SpeakerName>{name}</SpeakerName>
                  </div>
                ))}
            </SpeakerNamesDiv>
          </SpeakerDiv>
        )}
        <BtnDiv>
          <BasicBtn
            btntype="apply"
            to={{
              pathname: '/search',
              search: `?${queries}`,
            }}
            onClick={() => onClickApply()}
          >
            적용
          </BasicBtn>
          <BasicBtn
            to={{
              pathname: '/search',
              search: `?${queries}`,
            }}
            onClick={() => onClickInitial()}
          >
            초기화
          </BasicBtn>
        </BtnDiv>
      </TabDiv>
    </div>
  );
};

export default DetailTab;
