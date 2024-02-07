import mongoose from "mongoose";

const userFinanceSchema = new mongoose.Schema({
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

const user = mongoose.model("UserFin", userFinanceSchema)
export default user;