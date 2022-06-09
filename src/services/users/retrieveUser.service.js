import users from '../../database'

export default function retrieveUserService(userId){

    const userIndex = users.findIndex(user => user.uuid === userId)


    return users[userIndex]
}