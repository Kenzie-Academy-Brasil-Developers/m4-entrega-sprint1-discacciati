import { v4 as uuidv4 } from "uuid";
import users from '../../database'
import * as bcrypt from 'bcryptjs'

export default async function createUserService(data){

    const userAlreadyExists = users.find(user => user.email === data.email)

    if(userAlreadyExists){
        throw new Error("E-mail already registered")
    }

    const hashedPassword = await bcrypt.hash(data.password, 10)

    const newUser = {
        uuid: uuidv4(),
        name: data.name,
        email: data.email,
        isAdm: data.isAdm,
        password: hashedPassword,
        createdOn: new Date(),
        updatedOn: new Date(),
    }

    users.push(newUser)

    const {id, name, email, isAdm, createdOn, updatedOn} = newUser

    return newUser
}