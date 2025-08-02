import dotenv from "dotenv";
dotenv.config();
import express from "express";
import bodyParser from "body-parser";
import cors from "cors"

import ConnectDB from "./db-connection/ConnectDB.js";
// import { holdings,positions,watchlist } from "../dashboard/src/data.js";
import Holdingmodel from "./models/Holdingmodel.js";
import mongoose from "mongoose";
import positionModel from "./models/PositionModel.js"


const PORT = process.env.PORT;
const app = express();

app.use(cors());
app.use(bodyParser.json())

ConnectDB();

// app.get("/samplePositionData", (req, res) => {
//   const HoldingData = watchlist;
//   const processedHoldings = [];
//   HoldingData.forEach((item) => {
//     let newHoldingData = new positionModel({
//     product: item.product,
//     name: item.name,
//     qty: item.qty,
//     avg: item.avg,
//     price: item.price,
//     net: item.net,
//     day: item.day,
//     isLoss: item.isLoss,
//     });
//     newHoldingData.save();
//     // processedHoldings.push(newHoldingData)
//   });
//   res.json({ msg: "done processing" });

  
// });

app.get('/holdings',async (req,res)=>{
    try {
      let HoldingData=await Holdingmodel.find()
      res.send(HoldingData)
      // console.log(HoldingData)
      
    } catch (error) {
      console.log("holding error :" ,error)
    }
})

app.get('/position',async (req,res)=>{
    try {
      let PositionData=await positionModel.find()
      res.send(PositionData)
      // console.log(HoldingData)
      
    } catch (error) {
      console.log("holding error :" ,error)
    }
})

app.listen(PORT, () => {
  console.log(`app is rinning on port ${PORT}`);
});
