const express = require('express');
const session = require('express-session');
const fs = require('fs').promises;
const path = require('path');

const app = express();

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 60000,
    httpOnly: true,
    sameSite: 'lax'
  }
}))

app.get('/', (req, res) => {
  if(!req.session.test) {
    req.session.test = 'information'
  }
  res.set({
    'Content-Type': 'text/html'
  })
  res.sendFile(path.join(__dirname, 'app.html'));
});

app.listen(3001, () => {
  console.log('app 서버 3001포트.')
});