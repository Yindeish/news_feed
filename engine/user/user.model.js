import mongoose from 'mongoose'

const user_schema = new mongoose.Schema({
    user_name: String,
    avatar: String,
    full_name: String,
    email: { type: String, unique: true },
    password: { type: String, unique: true },
});

const User = mongoose.model('User', user_schema);

export { User }