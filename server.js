require('dotenv').config();
const app = require('./Student-vendor-app/Src/app.js');


const PORT = process.env.PORT || 3003;

app.listen(PORT, () => {
  console.log(`Order Microservice running at http://localhost:${PORT}`);
});


