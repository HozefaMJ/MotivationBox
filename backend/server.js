import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import morgan from "morgan";

// Connection DB
import connectDB from "./config/db.js";

// Middleware
import {notFound,errorHandler} from "./middleware/errorMiddleware.js"

dotenv.config()

connectDB()

const app = express()

if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}

app.get('/', (req,res)=> {
    res.send("MotivationBox")
})

app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 5000

app.listen(port, console.log(`Server running in ${process.env.NODE_ENV} mode oon port ${port}`.yellow.inverse))