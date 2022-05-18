const express = require('express');
const router = express.Router();
const data = require('../../src/data.json');

router.get('/', (req, res) => {
  res.send(data);
});

module.exports = router;
