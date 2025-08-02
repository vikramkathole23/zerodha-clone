import mongoose, { Schema } from "mongoose";

const HoldingSchema = new mongoose.Schema({
	name: String,
    qty: Number,
    avg: Number,
    price:Number,
    net: String,
    day: String,
    isLoss: Boolean
});

export default HoldingSchema;