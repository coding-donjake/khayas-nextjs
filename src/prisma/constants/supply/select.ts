import eventSupplyModelConstant from "../event-supply/model";
import logOrderByConstant from "../log/order-by";
import logSelectConstant from "../log/select";
import orderSupplyModelConstant from "../order-supply/model";

const supplySelectConstant = {
  id: true,
  createdAt: true,
  updatedAt: true,
  name: true,
  brand: true,
  quantity: true,
  unit: true,
  status: true,
  EventSupply: {
    select: eventSupplyModelConstant,
  },
  OrderSupply: {
    select: orderSupplyModelConstant,
  },
  SupplyLog: {
    orderBy: logOrderByConstant,
    select: logSelectConstant,
  },
};

export default supplySelectConstant;
