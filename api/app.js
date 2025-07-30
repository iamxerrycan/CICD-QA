// api/app.js
const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// Sample users data
const users = [
  { id: 2, name: 'Jane Doe' },
  { id: 3, name: 'Jim Doe' },
];

// Routes
app.get('/api/users', (req, res) => {
  res.json(users);
});

app.post('/api/users', (req, res) => {
  const newUser = req.body;
  users.push(newUser);
  res.status(201).json(newUser);
});

// health/status route for test
app.get('/status', (req, res) => {
  res.status(200).send("OK");
});

module.exports = app;
