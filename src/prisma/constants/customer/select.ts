import eventModelConstant from "../event/model";
import logOrderByConstant from "../log/order-by";
import logSelectConstant from "../log/select";
import userModelConstant from "../user/model";

const customerSelectConstant = {
  id: true,
  createdAt: true,
  updatedAt: true,
  address: true,
  email: true,
  phone: true,
  status: true,
  Event: {
    select: eventModelConstant,
  },
  User: {
    select: userModelConstant,
  },
  CustomerLog: {
    orderBy: logOrderByConstant,
    select: logSelectConstant,
  },
};

export default customerSelectConstant;
