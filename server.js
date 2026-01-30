require('dotenv').config();
const app = require('./Src/app');

const PORT = process.env.PORT || 3003;

// Log unhandled errors
process.on('uncaughtException', err => {
  console.error('🔥 UNCAUGHT EXCEPTION 🔥');
  console.error(err);
  console.error(err.stack);
});

process.on('unhandledRejection', err => {
  console.error('🔥 UNHANDLED REJECTION 🔥');
  console.error(err);
  console.error(err.stack);
});

app.listen(PORT, () => {
  console.log(`Order Microservice running at http://localhost:${PORT}`);
});
