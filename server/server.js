const express = require('express');
const app = express();
const test = require('./Router/test');
/*const LandingPage = require('../../src/pages/LandingPage');
const BillPage = require('../../src/pages/BillPage');
const SearchPage = require('../../src/pages/SearchPage');
const SpeakerPage = require('../../src/pages/SpeakerPage');*/

app.use('/api', test);

const port = 5000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
