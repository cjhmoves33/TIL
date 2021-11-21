const express = require('express');
const session = require('express-session');
const path = require('path');
const cors = require('cors');
const { User } = require('./models')

const app = express();
app.use(cors({
  origin: 'http://localhost:3001'
}))

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
    req.session.test = 'bok'
  }
  res.set({
    'Content-Type': 'text/html'
  })
  res.sendFile(path.join(__dirname, 'app.html'));
});

app.get('/info', async (req, res) => {
  console.log(req.sessionID);
  console.log(req.originalUrl)
  if(req.sessionID) {
    const result = await User.findOne({
      where: {
        username: 'bok'
      }
    })
    res.send(result);
  } else {
    throw new Error('??');
  }
})

app.listen(3001, () => {
  console.log('app 서버 3001포트.')
});