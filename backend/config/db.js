import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true
        })

        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.inverse)

    } catch (error) {
        console.error(`Error: ${error.message}`.red.inverse)
        process.exit(1) // 1 Exits with Failure
    }
}


export default connectDB;