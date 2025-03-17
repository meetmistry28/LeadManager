const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://Eons:abcd1234@cluster0.4hb7y4t.mongodb.net/crm");
        console.log("Connected to DB");
    } catch (error) {
        console.log("Not connected to DB", error);
    }
}

module.exports = connectDB;
