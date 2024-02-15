import mongoose from "mongoose";

const userFinSchema = new mongoose.Schema({
    userId: {
        type: String,
        default: ""
    },
    totalNet: {
        type: Number,
        default: ""
    },
    stocks: {
        type: Number,
        default: ""
    },
    realEstate: {
        type: Number,
        default: ""
    },
    cash: {
        type: Number,
        default: ""
    },
    finGoals: {
        type: Number,
        default: ""
    }
},
    { timeseries: true }
);

const user = mongoose.model("UserFin", userFinSchema)
export default user;