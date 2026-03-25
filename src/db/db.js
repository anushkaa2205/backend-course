const mongoose = require('mongoose');
async function connectDB(){
    // this connect database to server
    await mongoose.connect(process.env.MONGO_URI)
    console.log("connected to DB");   
}
module.exports = connectDB;