import {model} from "mongoose";

import PositionSchema from "../Schema/PositionSchema.js";

const positionModel = new model('Position',PositionSchema)

export default positionModel;