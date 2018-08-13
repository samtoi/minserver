const express = require('express');
const app = express();

const bodyParser = require('body-parser');

const morgan = require('morgan');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.text());

app.get('*', (req, res) => {
  console.log('get :: ', req.query);
  res.send('ok');
});

app.post('*', (req, res) => {
  console.log('post body :: \n', req.body);
  res.send('ok');
})

app.listen(4004, () => console.log('Listening started : ' + new Date().toISOString()));