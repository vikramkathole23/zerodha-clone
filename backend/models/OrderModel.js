import {model} from "mongoose";

import OrderSchema from "../Schema/OrderSchema";

const OrderModel = new model('Holding',OrderSchema)

export default OrderModel;