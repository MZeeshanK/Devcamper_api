const mongoose = require('mongoose');

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  // Used custom host
  // conn.connection.host = 'MZeeshanK';

  console.log(`MongoDB Connect: ${conn.connection.host}`.cyan.bold);
};

module.exports = connectDB;
