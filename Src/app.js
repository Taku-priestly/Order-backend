const express = require('express');
const cors = require('cors');
const orderRoutes = require('./routes/order.routes');
const errorHandler = require('./middlewares/error.middleware');

const app = express();

/* 🔽 CHANGE MADE HERE */
app.use(cors({
  origin: 'http://localhost:5173', // React (Vite frontend)
  credentials: true
}));

app.use(express.json());
app.use('/api', orderRoutes);
app.use(errorHandler);

module.exports = app;
