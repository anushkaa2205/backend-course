// const app = require('./src/app');
// app.listen(3000, () => {
//   console.log('Server is running on port 3000');
// });
require('dotenv').config();
const app = require('./src/data');
const connectDB = require('./src/db/db');
connectDB();
app.listen(2000, () => {
  console.log('Server is running on port 2000');
});