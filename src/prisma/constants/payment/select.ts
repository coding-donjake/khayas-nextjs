import eventModelConstant from "../event/model";

const paymentSelectConstant = {
  id: true,
  createdAt: true,
  updatedAt: true,
  amount: true,
  status: true,
  Event: {
    select: eventModelConstant,
  },
};

export default paymentSelectConstant;
