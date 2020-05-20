const express = require('express');

const app = express();

app.get('/api/customers', (req, res) => {
  const users = [
  {name:'Aditya',userName:'adi@1011',email:'adityamnnit2016@gmail.com'},
  {name:'Aditya Kumar',userName:'adi123',email:'adityamnnit2017@gmail.com'},
  {name:'Aditya Ranjan',userName:'adi12345',email:'adityamnnit2018@gmail.com'},
  ];

  res.json(users);
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);