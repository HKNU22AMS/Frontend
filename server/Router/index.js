const express = require('express');
const router = express.Router();
const fs = require('fs');
const data = JSON.parse(fs.readFileSync('../src/data.json', 'utf8'));

router.get('/api', (req, res) => {
  res.send({ data: data });
});

/*
q=searchText
&aN=assemNum
&sD=startDate
&eD=endDate
&mC=meetingClass
&cC=committeeClass
&sP=speakers
*/
router.get('/api/search', (req, res) => {
  const params = req.query;

  let result; // 필터링 총 결과
  const resultQ = data.bills.filter((bill) => bill.name.includes(params.q)); // 검색어 필터링 결과
  let resultA = []; // 대수 필터링 결과
  let resultD = []; // 기간 필터링 결과
  let resultM = []; // 회의구분 필터링 결과
  let resultC = []; // 위원회 필터링 결과
  let resultS = []; // 발언자 필터링 결과

  if (
    params.aN === '' &&
    params.sD === '' &&
    params.eD === '' &&
    (params.mC === '' || params.mC === []) &&
    (params.cC === '' || params.cC === []) &&
    (params.sP === '' || params.sP === [])
  ) {
    // 조건 없는 경우 검색어 결과만 반환
    res.send(resultQ);
  } else {
    // 대수
    let tmp, ind, ind2;
    if (params.aN !== '') {
      if (params.aN.length >= 2) {
        tmp = params.aN.map((a) =>
          resultQ.filter((bill) => bill.minute_id.assembly_num === Number(a)),
        );
        for (ind = 0; ind < params.aN.length; ind++) {
          for (ind2 = 0; ind2 < tmp[ind].length; ind2++) {
            resultA = [...resultA, tmp[ind][ind2]]; // 버그 해결하기..
          }
        }
      } else if (typeof params.aN === 'string') {
        resultA = resultQ.filter(
          (bill) => bill.minute_id.assembly_num === Number(params.aN),
        );
      }
    }

    // 기간
    if (params.sD !== '' && params.eD !== '') {
      if (params.sD.length > 0 && params.eD.length > 0) {
        resultD = resultQ.filter(
          (bill) =>
            new Date(bill.minute_id.meeting_date) > new Date(params.sD) &&
            new Date(params.eD) > new Date(bill.minute_id.meeting_date),
        );
      } else if (params.sD.length > 0 && params.eD.length === 0) {
        resultD = resultQ.filter(
          (bill) => new Date(bill.minute_id.meeting_date) > new Date(params.sD),
        );
      } else if (params.eD.length > 0 && params.sD.length === 0) {
        resultD = resultQ.filter(
          (bill) => new Date(bill.minute_id.meeting_date) < new Date(params.eD),
        );
      }
    }

    // 회의구분
    if (params.mC !== '') {
      if (params.mC.length >= 2) {
        tmp = params.mC.map((m) =>
          resultQ.filter((bill) => bill.minute_id.meeting_class === m),
        );
        for (ind = 0; ind < params.mC.length; ind++) {
          for (ind2 = 0; ind2 < tmp[ind].length; ind2++) {
            resultM = [...resultM, tmp[ind][ind2]];
          }
        }
      } else if (typeof params.mC === 'string') {
        resultM = resultQ.filter(
          (bill) => bill.minute_id.meeting_class === params.mC,
        );
      }
    }
    res.send(resultM);
  }
});

module.exports = router;
