import users from "../../database";

export default function deleteUserService(userId){

    const userIndex = users.findIndex(user => user.uuid === userId)

    users.splice(userIndex, 1)

    return true
}