import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log(`✅ Connected to MongoDB at ${process.env.MONGO_URI}`);
  } catch (err) {
    console.error(`❌ Error connecting to MongoDB: ${err.message}`);
    process.exit(1);
  }
};

export default connectDB;
