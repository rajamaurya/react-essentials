const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connect = require('./db/connection');
const connection = require('./db/connection');
const eventRouter = require('./eventsRouter/router')

const app = express();
const PORT = process.env.PORT || 4005;
app.use(bodyParser.json());
app.use(cors());
app.use(eventRouter)


app.listen(PORT, ()=>{
    console.log("server running on port 4005")
})
const  start = async ()=>{
    try{
        await connection();
       
    }catch(error){

    }
    
}

start();




