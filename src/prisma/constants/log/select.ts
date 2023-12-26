import userModelConstant from "../user/model";

export const logSelectConstant = {
  id: true,
  createdAt: true,
  updatedAt: true,
  type: true,
  content: true,
  User: {
    select: userModelConstant,
  },
} as any;

export default logSelectConstant;
