import mongoose from "mongoose";

const userFinSchema = new mongoose.Schema({
    totalNet : {
        type : Number,
        default : ""
    },
    stocks : {
        type : Number,
        default : ""
    },
    realEstate : {
        type : Number,
        default : ""
    },
    cash : {
        type : Number,
        default : ""
    }
},
    { timeseries: true }
);

const user = mongoose.model("UserFin", userFinSchema)
export default user;