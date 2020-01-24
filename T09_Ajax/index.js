const port = 9999;
const host = 'http://127.0.0.1';
const path = host + ':' + port + '/';

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();


app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
app.use(cors());

//Stuff for both tasks
function calculate(data) {
  switch (data.sign) {
    case '+':
      return parseInt(data.num1, 10) + parseInt(data.num2, 10);
    case '-':
      return data.num1 - data.num2;
    case '*':
      return data.num1 * data.num2;
    case '/':
      if (data.num2 == 0) {
        return 'Not allowed';
      }else {
        return data.num1 / data.num2;
      }
      default:
        return 'error';
  }
}
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/resources/HTML/9.html');
});


//Task 1
app.get('/t1', (req, res) => {
  res.sendFile(__dirname + '/resources/HTML/9a.html');
});

app.post('/t1_result', (req, res) => {
  if (req.body.output === 'error' || req.body.output === 'Not allowed') {
    res.writeHead(302, {
      Location: path + "error"
    });
  } else {
    const inputJSON = calculate(JSON.parse(req.body.output));
    console.log(inputJSON);

    if (inputJSON === 'error') {
      res.writeHead(302, {
        Location: path + "error"
      });
    } else {
      const output = JSON.stringify({
        "Result": inputJSON
      });
      console.log(output);
      res.send(output);
    }
  }
  res.end();
});

app.get('/JS/9a.js', (req, res) => {
  res.sendFile(__dirname + '/resources/JS/9a.js');
});

app.get('/error', (req, res) => {
  res.sendFile(__dirname + '/resources/HTML/error.html');
});


//Task 2
app.get('/t2', (req, res) => {
  res.sendFile(__dirname + '/resources/HTML/9b.html');
});


app.post('/t2_result', (req, res) => {
  const result = calculate(req.body);
  res.send(JSON.stringify({
    'result': result
  }));
  res.end();
});

app.get('/JS/9b.js', (req, res) => {
  res.sendFile(__dirname + '/resources/JS/9b.js');
});

app.listen(port, () => console.log(`App listening on port ${port}!`));
