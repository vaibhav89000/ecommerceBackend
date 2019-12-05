const mongoose = require('mongoose');

//const URI="mongodb+srv://dbUser:dbUser@cluster0-yzk0x.mongodb.net/test?retryWrites=true&w=majority";

const URI="mongodb+srv://dbUser:dbUser@cluster0-yzk0x.mongodb.net/test?retryWrites=true&w=majority";


const connectDB = async ()=>{
  await  mongoose.connect(URI,{ useUnifiedTopology: true,useNewUrlParser: true });
  console.log('db connected');
};

module.exports = connectDB;
