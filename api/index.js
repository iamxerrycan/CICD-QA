// const express = require('express');
import express from "express";
const app = express();
// const cors = require('cors');
import cors from "cors";
app.use(express.json());
app.use(cors());

const users = [
  { id: 2, name: 'Jane Doe' },
  { id: 3, name: 'Jim Doe' },
];

app.get('/api/users', (req, res) => {
  res.json(users);
});


app.post('/api/users', (req, res) => {
  const newUser = req.body;
  users.push(newUser);
  res.status(201).json(newUser);
}
);

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
