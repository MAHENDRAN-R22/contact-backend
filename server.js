const express = require("express");
const app = express();


const errHandler = require('./middleware/middleware');
const connectDB = require("./config/dbconnection");
require("dotenv").config();

connectDB();

const port = process.env.PORT || 8080 
app.use(errHandler);
app.use(express.json()); //this is going to provide a passer wyhich will help us to pass a data stream that we receive form the client to server side
app.use('/api/contacts',require('./routes/contactroutes'))
app.use('/api/user',require('./routes/userroutes'))
app.listen(port,()=>{
    console.log(`Server is listening on port ${port}`);

})