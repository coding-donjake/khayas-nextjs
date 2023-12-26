import orderModelConstant from "../order/model";

const orderSupplySelectConstant = {
  id: true,
  createdAt: true,
  updatedAt: true,
  quantity: true,
  status: true,
  Order: {
    select: orderModelConstant,
  },
};

export default orderSupplySelectConstant;
