const { default: mongoose } = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);

    console.log('Database connected');
  } catch (error) {
    console.error(error);
  }
};

module.exports = connectDB;
