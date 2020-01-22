const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('../files'));
app.set('view engine', 'pug');


app.get('/hello', (req, res) => res.send('Hello World!'));

app.get('/form', (req, res) => res.sendFile('views/T08.html', {
  root: __dirname
}));

app.post('/formdata', function(req, res) {
  console.log(req.body);
  res.render('form.pug', {
    "fname": req.body.fname,
    "lname": req.body.lname,
    "username": req.body.username
  });
});

app.get('/jsondata', function(req, res) {
  const someData = JSON.stringify({
    "user" : "Kuba",
    "msg" : "Hello",
    "to" : "Pietia",
});
res.render( 'json.pug', {"body": someData});
});

app.listen(port, () => console.log(`App listening on port ${port}!`));
