import mongoose from "mongoose";

const userGenSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        min: 5, // minimum 5 chars.
        max: 20,
        unique: true
    },
    email: {
        type: String,
        require: true,
        max: 50,
        unique: true
    },
    password: {
        type: String,
        require: true,
        min: 8
    },
    profilePic: {
        type: String,
        default: "",
    },
    mainCoverPic: {
        type: String,
        default: "",
    },
    city: {
        type: String,
        max: 50,
    },
},
    { timeseries: true }
);

const user = mongoose.model("User", userGenSchema)
export default user;