import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({ quiet: true });

const connectDB = async () => {
    const mongoUri = process.env.MONGO_URI;

    if (!mongoUri) {
        throw new Error("La variable de entorno MONGO_URI no está configurada");
    }

    await mongoose.connect(mongoUri);
    console.log("MongoDB conectado");
};

export default connectDB;

