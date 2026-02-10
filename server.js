require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect(process.env.MONGO_URI || 'mongodb+srv://moldiryergesh:Vekz2006@cluster0.ybkq4mp.mongodb.net/everfree')
  .then(() => console.log('DB OK'))
  .catch(e => console.log(e));

app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/flowers', require('./routes/flowerRoutes'));
app.use('/api/orders', require('./routes/orderRoutes'));

app.get(/.*/, (req, res) => res.sendFile(path.join(__dirname, 'public', 'index.html')));

app.listen(3001, () => console.log('3001'));