const mongoose = require('mongoose');

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI);

  // Used custom host
  conn.connection.host = 'MZeeshanK';

  console.log(`MongoDB Connect: ${conn.connection.host}`.green.bold);
};

module.exports = connectDB;
