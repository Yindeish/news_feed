import mongoose from 'mongoose';

const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL);

    console.log('MongoDB connected')
  } catch (error) {
    console.error('Error connecting to mongoDB', error);
  }
}

export { connectToDB }