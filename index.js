const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/questions', (req, res) => {
  res.sendFile(path.join(__dirname, '/data', 'question.json'));
});

app.get('/question/:questionId', (req, res) => {
  const qeustionId = parseInt(req.params.questionId);
  
  fs.readFile(path.join(__dirname, '/data', 'question.json'), 'utf8', (err, data) => {
    if (err) throw err;
    data = JSON.parse(data);

    res.json(data.questions[qeustionId]);
  });
});

app.get('/results', (req, res) => {
  res.sendFile(path.join(__dirname, '/data', 'result.json'));
});

app.listen(3030);