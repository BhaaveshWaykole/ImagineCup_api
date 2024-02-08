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
    gender :{
        type: String,
        default: "",
    },
    age: {
        type: Number,
        default: "",
    },
    relationship: {
        type: Number, 
        enum : [1, 2, 3],
    },
    occupation : {
        type: String,
        default: "",
    },
    income : {
        type: String,
        default : ""
    },
    monthExp : {
        type: Number,
        default : ""
    },
    // assetType :{
    //     type : Boolean,
    //     default: false
    // }
},
    { timeseries: true }
);

const user = mongoose.model("UserGen", userGenSchema)
export default user;