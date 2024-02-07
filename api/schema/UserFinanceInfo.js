import mongoose from "mongoose";

const userFinanceSchema = new mongoose.Schema({
    
},
    { timeseries: true }
);

const user = mongoose.model("UserFin", userFinanceSchema)
export default user;