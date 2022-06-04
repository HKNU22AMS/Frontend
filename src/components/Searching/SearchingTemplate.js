import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import data from '../../data.json';
import { Link, useLocation } from 'react-router-dom';
import Pagination from '../common/Pagination';
/*import axios from 'axios';
import DetailSearchTemp from '../Landing/DeatailSearchTemp';*/
import qs from 'qs';

const ColumnDiv = styled.div`
  display: flex;
  background: #727e75;
  border-radius: 10px;
  height: 50px;
  width: 99%;
  color: white;
  font-weight: 400;
  text-align: center;
  align-items: center;
  font-family: 'Roboto';
  font-size: 1.25rem;
`;
const ColumnText = styled.div`
  width: ${(props) => props.size || '25%'};
  text-decoration: none;
`;
const MappingDiv = styled.div`
  display: flex;
  font-family: 'Roboto';
  height: 600px;
  flex-direction: column;
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
const MappingList = styled.li`
  font-size: 1.1rem;
  width: 100%;
  margin-top: 1.3%;
  margin-bottom: 1.3%;
  display: flex;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const TextDiv = styled.div`
  margin-top: 2%;
  margin-bottom: 5px;
  //padding-left: 18%;
  //padding-right: 7%;
  display: flex;
  justify-content: space-between;
  //text-align: center;
  font-weight: bold;
  font-family: 'Roboto';
`;
const TotalText = styled.div`
  padding-left: 30px;
  width: 20%;
`;
const DisplayNum = styled.div`
  padding-right: 30px;
  width: 180px;
`;
const StyledSelect = styled.select`
  width: 100px;
  margin-left: 10px;
  border: 1px solid gray;
  border-radius: 5px;
  padding: 2px;
  font-size: 14px;
`;

const SearchingTemplate = () => {
  const [posts, setPosts] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);

  const offset = (page - 1) * limit;

  const location = useLocation();
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });
  console.log(location);
  console.log(query);

  useEffect(() => {
    //searchData();
    setPosts(data.bills);
  }, []);

  return (
    <div>
      <TextDiv>
        <TotalText>검색 결과: {posts.length}</TotalText>
        <DisplayNum>
          출력 건수
          <StyledSelect
            type="number"
            value={limit}
            onChange={({ target: { value } }) => setLimit(Number(value))}
          >
            <option value="10">10개</option>
            <option value="15">15개</option>
            <option value="20">20개</option>
          </StyledSelect>
        </DisplayNum>
      </TextDiv>

      <ColumnDiv>
        <ColumnText size="35%">법안</ColumnText>
        <ColumnText>회의 구분</ColumnText>
        <ColumnText>위원회</ColumnText>
        <ColumnText size="15%">회의 일자</ColumnText>
      </ColumnDiv>

      <MappingDiv>
        {posts.slice(offset, offset + limit).map((bill) => (
          <MappingList key={bill.id}>
            <ColumnText size="35%">
              <StyledLink to={`/bill/${bill.id}`}>{bill.name}</StyledLink>
              {/*<StyledLink to='/bill'>{bill.name}</StyledLink>*/}
            </ColumnText>
            <ColumnText>{bill.minute_id.meeting_class}</ColumnText>
            <ColumnText>{bill.minute_id.committee}</ColumnText>
            <ColumnText size="15%">{bill.minute_id.meeting_date}</ColumnText>
          </MappingList>
        ))}
      </MappingDiv>

      <Pagination
        total={posts.length}
        limit={limit}
        page={page}
        setPage={setPage}
      />
    </div>
  );
};

export default SearchingTemplate;
