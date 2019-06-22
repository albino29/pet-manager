const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(
  'mongodb+srv://albino29:temp2909@petmanager-fooqd.mongodb.net/test?retryWrites=true&w=majority',
  { useNewUrlParser: true }
);

requireDir('./src/models');
app.use('/api', require('./src/routes'));

app.listen(3001, () => {
  console.log('Running in 3001');
});
