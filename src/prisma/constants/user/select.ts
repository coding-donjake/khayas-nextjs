import accountModelConstant from "../account/model";
import customerModelConstant from "../customer/model";
import logOrderByConstant from "../log/order-by";
import logSelectConstant from "../log/select";

const userSelectConstant = {
  id: true,
  createdAt: true,
  updatedAt: true,
  lastName: true,
  firstName: true,
  middleName: true,
  suffix: true,
  gender: true,
  birthDate: true,
  Account: {
    select: accountModelConstant,
  },
  Customer: {
    select: customerModelConstant,
  },
  UserLog: {
    orderBy: logOrderByConstant,
    select: logSelectConstant,
  },
};

export default userSelectConstant;
