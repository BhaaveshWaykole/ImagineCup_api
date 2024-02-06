import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import helmet from "helmet";
import morgan from "morgan";

// const cors = require('cors');  // Add this line to import the cors middleware

const app = express();
dotenv.config()

mongoose.connect(process.env.MONGO_URL).then(() => {
  console.log("Connected to db")
})
// Use cors middleware to enable CORS
// app.use(cors());

// app.get('/generate-number', (req, res) => {
//   const generatedNumber = Math.floor(Math.random() * 1000);
//   res.json({ number: generatedNumber });
// });
app.use(express.json())
app.use(helmet())
app.use(morgan("common"))

app.listen(3000, () => {
  console.log('Love Silver Stride 3000 :)');
});
