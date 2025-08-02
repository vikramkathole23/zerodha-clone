import { model } from "mongoose";

import HoldingSchema from "../Schema/HoldingSchema.js";

const HoldingModel = new model('Holding',HoldingSchema)

export default HoldingModel;