const express = require('express');
const router = express.Router();
const fs = require('fs');
const data = JSON.parse(fs.readFileSync('../src/data.json', 'utf8'));

router.get('/api', (req, res) => {
  res.json({ greeting: 'hello' });
});

/*router.get('/bill/:Billid', (req, res) => {
  res.send(req.params.id);
  console.log(res);
});*/
/*
router.get('/api/search', (req, res) => {
  let assemNum = req.query.assemNum;
  let reqOptions = {
    params: {
      assemNum: assemNum,
    },
  };
  //res.json(data);
  //let query = req.query.query;
  /*let assemNum: req.query.assemNum;
  let startDate: req.query.startDate;
  let endDate: req.query.endDate;
  let select: req.query.select;
  let reqOptions = {
    params: {
      assemNum: assemNum,
      startDate: startDate,
      endDate: endDate,
      select: select,    }
  };
  try {
    let response = axios.get('http://localhost:5000/api', reqOptions);
    return res.json(response.data);
  } catch (e) {
    return res.json({
      status: 400,
      message: e,
    });
  }
});*/

//router.get('');

/*router.get('/search', (req, res) => {
  res.send({ data: data });
});*/

module.exports = router;
