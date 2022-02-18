const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');
const PostRouter = require('./src/routers/postRouter');
const connection = require('./src/db/connection');
const eventRouter = require('./src/routers/events');

const app = express();

// app.use(function(req, res, next) {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
//     res.setHeader('Access-Control-Allow-Credentials', true);
//     next();
// });


app.use(bodyParser.json())
app.use(cors());
app.get('/',(req,res)=>{
    res.send("hello post service")
})
app.use(PostRouter)
app.use(eventRouter)



app.listen(4001, ()=>{
    console.log("running on port 4001")
})

module.exports = app