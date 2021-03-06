import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

async function connectDB() {
    // const url = 'mongodb://localhost:27017/shop'
    const url = process.env.DATABASE_URL;
    // const url =
    //     "mongodb+srv://CaoKhaHieu:<CaoKhaHieu>@cluster0.r9hva.mongodb.net/shop?retryWrites=true&w=majority";

    try {
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        });
        console.log("connected to db ");

        // show all the collections
        const collections = await mongoose.connection.db.collections();

        // // show all the data of each collection
        // for (let collection of collections) {
        //     console.log(collection.collectionName);
        //     const data = await collection.find({}).toArray();
        //     console.log(data);
        // }
    } catch (error) {
        console.log(error);
    }
}

export default connectDB;
