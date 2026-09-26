import mongoose from "mongoose";
import connectDB from "./src/db/database.js";
import postRepository from "./src/repositories/PostRepository.js";
import userRepository from "./src/repositories/UserRepository.js";

const run = async () => {
    try {
        await connectDB();

        const user = await userRepository.findOrCreate({
            email: "earevalo@tecsup.edu.pe",
            name: "William",
            lastName: "Arévalo",
        });

        console.log("Usuario registrado:", user);

        await postRepository.findOrCreate({
            title: "Hello",
            content: "Hi, this is my first post!",
            user: user._id,
        });

        const users = await userRepository.findAll();
        console.log("Usuarios actuales:", users);

        const posts = await postRepository.findAll();
        console.log("Posts registrados:", posts);
    } catch (error) {
        console.error("Error al ejecutar la aplicación:", error.message);
        process.exitCode = 1;
    } finally {
        await mongoose.disconnect();
    }
};

await run();
