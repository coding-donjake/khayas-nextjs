import accountModelConstant from "../account/model";
import taskModelConstant from "../task/model";

const taskAssigneeSelectConstant = {
  id: true,
  createdAt: true,
  updatedAt: true,
  status: true,
  Account: {
    select: accountModelConstant,
  },
  Task: {
    select: taskModelConstant,
  },
};

export default taskAssigneeSelectConstant;
