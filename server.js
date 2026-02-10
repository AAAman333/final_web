require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const axios = require('axios'); 

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

console.log(" Starting server...");

const orderSchema = new mongoose.Schema({
  customerName: String,
  phone: String,
  address: String,
  items: [String], 
  createdAt: { type: Date, default: Date.now }
});
const Order = mongoose.models.Order || mongoose.model('Order', orderSchema);


app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/flowers', require('./routes/flowerRoutes'));
app.use('/api/orders', require('./routes/orderRoutes'));

app.get('/weather', async (req, res) => {
  try {
    const city = "Astana";
    const apiKey = process.env.OPENWEATHER_KEY;

    const { data } = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
      params: { q: city, units: 'metric', appid: apiKey }
    });

    res.json({
      temperature: data.main.temp,
      feels_like: data.main.feels_like,
      description: data.weather[0].description,
      wind_speed: data.wind.speed,
      rain_3h: data.rain?.['3h'] ?? 0
    });

  } catch (err) {
    console.error("Weather API error:", err.message || err);

    res.json({
      temperature: 0,
      feels_like: 0,
      description: "Data unavailable",
      wind_speed: 0,
      rain_3h: 0
    });
  }
});

app.get('/random-fact', async (req, res) => {
  try {
    const { data } = await axios.get('https://catfact.ninja/fact');
    res.json({ fact: data.fact });
  } catch (err) {
    console.error("Cat fact API error:", err.message || err);
    res.json({ fact: "Cats can recognize their owner's voice." });
  }
});

app.post('/api/orders', async (req, res) => {
  try {
    const { customerName, phone, address, items } = req.body;
    const order = new Order({ customerName, phone, address, items });
    await order.save();
    res.status(201).json(order);
  } catch (err) {
    console.error("Order creation error:", err);
    res.status(500).json({ error: "Failed to create order" });
  }
});

app.get('/api/orders', async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });
    res.json(orders);
  } catch (err) {
    console.error("Fetch orders error:", err);
    res.status(500).json({ error: "Failed to fetch orders" });
  }
});

app.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(` Server running on http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error(' MongoDB Connection Error:', err.message);
  });
