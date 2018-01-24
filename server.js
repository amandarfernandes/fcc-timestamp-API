// server.js
// where your node app starts

const express=require('express'); // init project
const bodyParser = require('body-parser'); //gives you access to req.params
const cors = require('cors'); //cross origin
const app = express();
const port = process.env.PORT ||3000;

app.use(bodyParser.json());
app.use(cors());

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/",(req, res)=>{
  res.sendFile(__dirname + '/views/index.html');
});

app.get("/:date",(req,res)=>{
  res.json(getDate(req.params.date));
});

// listen for requests :)
var listener = app.listen(port, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});


function getDate(dateVal) {
  const date = !isNaN(dateVal)? new Date(Number(dateVal)*1000): new Date(dateVal); 
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return (date instanceof Date && !isNaN(date.valueOf())) ?
      {unixtime: date.getTime()/1000, natural:date.toLocaleDateString('en-US', options)}:
      {unixtime: null, natural:null};
}