import eventModelConstant from "../event/model";
import logOrderByConstant from "../log/order-by";
import logSelectConstant from "../log/select";

const supplierSelectConstant = {
  id: true,
  createdAt: true,
  updatedAt: true,
  name: true,
  address: true,
  email: true,
  phone: true,
  status: true,
  SupplierLog: {
    orderBy: logOrderByConstant,
    select: logSelectConstant,
  },
};

export default supplierSelectConstant;
