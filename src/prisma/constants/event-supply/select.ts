import eventModelConstant from "../event/model";
import supplyModelConstant from "../supply/model";

const eventSupplySelectConstant = {
  id: true,
  createdAt: true,
  updatedAt: true,
  quantity: true,
  status: true,
  Event: {
    select: eventModelConstant,
  },
  Supply: {
    select: supplyModelConstant,
  },
};

export default eventSupplySelectConstant;
