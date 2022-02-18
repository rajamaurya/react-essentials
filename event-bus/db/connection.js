const mongoose = require('mongoose');
const url = "mongodb+srv://root:root@cluster0.9ytji.mongodb.net/query-db?retryWrites=true&w=majority";

const connect = async ()=>{
            await mongoose.connect(url, (err,res)=>{
                 if(err){
                     return "error"
                 }else{
                     console.log("connected to mongo DB.")
                 }
            })
}

module.exports = connect;