import logOrderByConstant from "../log/order-by";
import logSelectConstant from "../log/select";
import orderSupplyModelConstant from "../order-supply/model";
import supplierModelConstant from "../payment/model";

const orderSelectConstant = {
  id: true,
  createdAt: true,
  updatedAt: true,
  dateOrdered: true,
  dateArrived: true,
  status: true,
  Supplier: {
    select: supplierModelConstant,
  },
  OrderSupply: {
    select: orderSupplyModelConstant,
  },
  OrderLog: {
    orderBy: logOrderByConstant,
    select: logSelectConstant,
  },
};

export default orderSelectConstant;
