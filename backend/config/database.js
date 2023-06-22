const mongoose = require('mongoose')



const dbConnect=()=>{
    mongoose.connect(process.env.DB_URI).then(data=>{
        console.log("database connected successfully ")
    })
        .catch(err=>{
            console.log("Error while connecting to database",err)
        })
    
}

module.exports= dbConnect

