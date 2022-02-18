const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');
const CommentRouter = require('./src/routers/commentRouter');
const connection = require('./src/db/connection');

const app = express();

app.use(bodyParser.json())
app.use(cors());
app.get('/',(req,res)=>{
    res.send("hello comment service")
})
app.use(CommentRouter)



app.listen(4002, ()=>{
    console.log("running on port 4002")
})

module.exports = app