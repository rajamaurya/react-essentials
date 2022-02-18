const mongoose = require('mongoose');

const url = "mongodb+srv://root:root@cluster0.9ytji.mongodb.net/post-db?retryWrites=true&w=majority";
(async ()=>{
    await mongoose.connect(url,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        }, 
        ()=>{
                    console.log("connected post db")
            },
)

})();

module.exports = mongoose;