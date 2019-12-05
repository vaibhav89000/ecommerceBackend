const express = require('express');
const connectDB = require('./DB/connection');
const app = express();

connectDB();
//const Port = process.env.Port ||3000;  
app.use(express.json({extended: false}));
app.use('/api/userModel',require('./Api/User'));

const Port = 3000;

app.listen(Port,()=>console.log('server started'));
