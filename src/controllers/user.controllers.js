import createUserService from "../services/users/createUser.service"
import retrieveUserService from "../services/users/retrieveUser.service"
import listUserService from "../services/users/listUser.service";
import deleteUserService from "../services/users/deleteUser.service";
import updateUserService from "../services/users/updateUser.service";

export async function createUser(req, res){
    
    try {
        const user = await createUserService(req.body)
        
        const { uuid, name, email, isAdm, createdOn, updatedOn} = user
        const newUserReturn = { uuid, name, email, isAdm, createdOn, updatedOn}
        
        return res.status(201).json(newUserReturn)

    } catch (error) {
        return res.status(400).json({
            message: error.message
        })
    }

}

export function listUser(req, res){
    const users = listUserService()

    return res.status(200).json(users)
}

export function retrieveUser(req, res){
    const userId = req.user.uuid

    const user = retrieveUserService(userId)

    const { uuid, name, email, isAdm, createdOn, updatedOn} = user
    const newUserReturn = { uuid, name, email, isAdm, createdOn, updatedOn}

    return res.status(200).json(newUserReturn)
}

export function deleteUser(req, res){

    const userId = req.params.uuid

    deleteUserService(userId)

    return res.status(200).json({
        message: "User deleted with success"
    })

    
}

export function updateUser(req, res){
    try {
        const userId = req.params.uuid
        const data = req.body
        const newDate = new Date()

        const user = updateUserService(userId, newDate, data)
        
        const { uuid, name, email, isAdm, createdOn, updatedOn} = user
        const newUserReturn = { uuid, name, email, isAdm, createdOn, updatedOn}

        return res.status(200).json(newUserReturn)
    } 
    catch (error) {
        return res.status(400).json({
            message: error.message
        })
    }
}