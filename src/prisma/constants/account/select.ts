import logOrderByConstant from "../log/order-by";
import logSelectConstant from "../log/select";
import taskAssigneeModelConstant from "../task-assignee/model";
import userModelConstant from "../user/model";

const accountSelectConstant = {
  id: true,
  createdAt: true,
  updatedAt: true,
  username: true,
  role: true,
  status: true,
  TaskAssignee: {
    select: taskAssigneeModelConstant,
  },
  User: {
    select: userModelConstant,
  },
  AccountLog: {
    orderBy: logOrderByConstant,
    select: logSelectConstant,
  },
};

export default accountSelectConstant;
