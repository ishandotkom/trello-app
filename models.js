const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

mongoose.connect(process.env.MONGO_URI).then(()=> {
    console.log("Connected to MongoDB");
});

const userSchema = new mongoose.Schema({
    username : String,
    password: String
})

const organizationSchema = new mongoose.Schema({
    title: String,
    description: String,
    admin: mongoose.Types.ObjectId,
    members: [mongoose.Types.ObjectId]
})

const userModel = mongoose.model("Users", userSchema);
const organizationModel = mongoose.model("Organizations", organizationSchema);

module.exports = {
    userModel,
    organizationModel
}