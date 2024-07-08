const mongoose = require('mongoose');
require('dotenv').config();

const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB Atlas');
  } catch (error) {
    console.error('Error connecting to MongoDB Atlas', error);
    process.exit(1);
  }
};

module.exports = connectMongoDB;

// const {connect} = require("mongoose");

// const ConnectToDB = async(url)=>{
//     await connect(url);
// }

// module.exports = ConnectToDB;