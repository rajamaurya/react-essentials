const mongoose = require('mongoose');

const url = "mongodb+srv://root:root@cluster0.9ytji.mongodb.net/comment-db?retryWrites=true&w=majority";
(async ()=>{
    await mongoose.connect(url,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        }, 
        ()=>{
                    console.log("connected comment db")
            },
)

})();

module.exports = mongoose;