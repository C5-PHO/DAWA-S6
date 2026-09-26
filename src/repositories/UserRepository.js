import User from "../models/User.js";

class UserRepository {
    async create(user) {
        return await User.create(user);
    }

    async findOrCreate(userData) {
        return await User.findOneAndUpdate(
            { email: userData.email },
            { $setOnInsert: userData },
            {
                new: true,
                upsert: true,
                runValidators: true,
                setDefaultsOnInsert: true,
            },
        );
    }

    async findAll() {
        return await User.find();
    }

    async findById(id) {
        return await User.findById(id);
    }
}

export default new UserRepository();

