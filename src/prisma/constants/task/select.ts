import eventModelConstant from "../event/model";
import logOrderByConstant from "../log/order-by";
import logSelectConstant from "../log/select";
import taskAssigneeModelConstant from "../task-assignee/model";

const taskSelectConstant = {
  id: true,
  createdAt: true,
  updatedAt: true,
  dateDeadline: true,
  name: true,
  status: true,
  Event: {
    select: eventModelConstant,
  },
  TaskAssignee: {
    select: taskAssigneeModelConstant,
  },
  TaskLog: {
    orderBy: logOrderByConstant,
    select: logSelectConstant,
  },
};

export default taskSelectConstant;
