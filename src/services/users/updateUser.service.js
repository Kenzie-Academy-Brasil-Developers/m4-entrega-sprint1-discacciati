import users from "../../database";

export default function updateUserService(userId, newDate, data) {
  const user = users.find((user) => user.uuid === userId);
  const userIndex = users.findIndex((user) => user.uuid === userId);

  if (!user) {
    throw new Error("User not found");
  }

  const userAdmin = users[userIndex].isAdm;

  users[userIndex] = {
    ...user,
    ...data,
    updatedOn: newDate,
    isAdm: userAdmin,
  };

  return users[userIndex];
}
