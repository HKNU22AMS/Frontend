const express = require('express');
const cors = require('cors');
const app = express();
const api = require('./Router/index');

app.use(cors());

app.use('/', api);

/*module.exports = async(req, res)=>{
  const {}
}*/

const port = 5000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
