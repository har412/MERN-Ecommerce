const app = require('./app')

const dotenv = require('dotenv')

const db = require('./config/database')

dotenv.config({path:"backend/config/config.env"})




//connect database 
db()

const router= require('./routes/productRoutes')

app.use("/app/v1",router)

app.listen(process.env.PORT,()=>{
    console.log(`App is running at ${process.env.PORT}`)
})