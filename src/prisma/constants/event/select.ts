import customerModelConstant from "../customer/model";
import eventSupplyModelConstant from "../event-supply/model";
import logOrderByConstant from "../log/order-by";
import logSelectConstant from "../log/select";
import paymentModelConstant from "../payment/model";
import taskModelConstant from "../task/model";

const eventSelectConstant = {
  id: true,
  createdAt: true,
  updatedAt: true,
  dateStarted: true,
  dateEnded: true,
  type: true,
  name: true,
  price: true,
  balance: true,
  status: true,
  Customer: {
    select: customerModelConstant,
  },
  EventSupply: {
    select: eventSupplyModelConstant,
  },
  Payment: {
    select: paymentModelConstant,
  },
  Task: {
    select: taskModelConstant,
  },
  EventLog: {
    orderBy: logOrderByConstant,
    select: logSelectConstant,
  },
};

export default eventSelectConstant;
