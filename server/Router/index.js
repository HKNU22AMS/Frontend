const express = require('express');
const router = express.Router();
const db = require('../config/db');

router.get('/api', (req, res) => {
  res.send('hello');
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

router.get('/api/comms', (req, res) => {
  db.query(`SELECT DISTINCT committee FROM minute`, function (err, comms) {
    if (err) {
      console.log(err);
    }
    res.send(comms);
  });
});

router.get('/api/bill/:Billid', (req, res) => {
  const Billid = req.params.Billid;
  let billInfo = { b: [], s: [] };
  // b.graph, b.keyword 미포함
  db.query(
    `SELECT b.bill_id, b.bill_name, b.main_content, b.comment_sum FROM bill as b LEFT JOIN proposal as p ON b.bill_id = p.bill_id LEFT JOIN speaker as s ON p.speaker_id2 = s.speaker_id LEFT JOIN remark as r ON s.speaker_id = r.speaker_id WHERE b.bill_id = ?`,
    [Billid],
    function (err, bill) {
      if (err) {
        console.log(err);
      }
      billInfo['b'] = bill;
    },
  );
  db.query(
    `SELECT r.speaker_id, r.content, s.speaker_name, s.affiliation FROM bill as b LEFT JOIN proposal as p ON b.bill_id = p.bill_id LEFT JOIN remark as r ON p.speaker_id2 = r.speaker_id LEFT JOIN speaker as s ON r.speaker_id = s.speaker_id WHERE b.bill_id = ?`,
    [Billid],
    function (err, speakers) {
      if (err) {
        console.log(err);
      }
      billInfo['s'] = speakers;
      res.send(billInfo);
    },
  );
});

router.get('/api/speaker/:Speakerid', (req, res) => {
  const Speakerid = req.params.Speakerid;
  let speakerInfo = { s: [], b: [] };
  db.query(
    `SELECT * FROM speaker WHERE speaker_id = ?`,
    [Speakerid],
    function (err, speaker) {
      if (err) {
        console.log(err);
      }
      speakerInfo['s'] = speaker;
    },
  );
  db.query(
    `SELECT b.bill_id, b.bill_name, m.assembly_num, m.committee, m.meeting_date, m.meeting_class FROM bill as b LEFT JOIN proposal as p ON b.bill_id = p.bill_id LEFT JOIN speaker as s ON p.speaker_id2 = s.speaker_id LEFT JOIN remark as r ON s.speaker_id = r.speaker_id LEFT JOIN minute as m ON r.minute_id = m.minute_id WHERE s.speaker_id = ?`,
    [Speakerid],
    function (err, bills) {
      if (err) {
        console.log(err);
      }
      speakerInfo['b'] = bills;
      res.send(speakerInfo);
    },
  );
});

router.get('/api/search', (req, res) => {
  const params = req.query;
  console.log(params);

  let Qtext = `SELECT b.bill_id, b.bill_name, s.speaker_name, m.assembly_num, m.committee, m.meeting_date, m.meeting_class FROM bill as b LEFT JOIN proposal as p ON b.bill_id = p.bill_id LEFT JOIN speaker as s ON p.speaker_id2 = s.speaker_id LEFT JOIN remark as r ON s.speaker_id = r.speaker_id LEFT JOIN minute as m ON r.minute_id = m.minute_id WHERE b.bill_name LIKE ?`;
  let QInj = ['%' + params.q + '%'];

  if (params.aN !== '') {
    Qtext += ` AND m.assembly_num IN (?)`;
    // if (typeof params.aN !== 'string' && params.aN.length >= 2) {
    //   QInj = [...QInj, '(' + params.aN.join(',') + ')'];
    // } else {
    QInj = [...QInj, params.aN];
    // }
  }
  if (params.sD !== '') {
    Qtext += ` AND m.meeting_date >= ?`;
    QInj = [...QInj, params.sD];
  }
  if (params.eD !== '') {
    Qtext += ` AND m.meeting_date <= ?`;
    QInj = [...QInj, params.eD];
  }
  if (params.mC !== '') {
    Qtext += ` AND m.meeting_class IN (?)`;
    QInj = [...QInj, params.mC];
  }
  if (params.cC !== '') {
    Qtext += ` AND m.committee IN (?)`;
    QInj = [...QInj, params.cC];
  }
  if (params.sP !== '') {
    Qtext += ` AND s.speaker_name IN (?)`;
    QInj = [...QInj, params.sP];
  }

  db.query(Qtext, QInj, function (err, bills) {
    if (err) {
      console.log(err);
    }
    res.send(bills);
  });
});

module.exports = router;
