import { Router } from 'express'
import {createUser} from '../controllers/user.controllers'
import {updateUser} from '../controllers/user.controllers'
import {listUser} from '../controllers/user.controllers'
import {retrieveUser} from '../controllers/user.controllers'
import {deleteUser} from '../controllers/user.controllers'
import verifyOwnerUser from '../middlewares/verifyOwnerUser.middleware'
import verifyAdminUser from '../middlewares/verifyAdminUser.middleware'
import userSchema from '../database/schemas/user.schema'
import schemaValidation from '../middlewares/schemaValidation.middleware'
import authorization from '../middlewares/authorization.middleware'

const userRouter = Router()

userRouter.post('', schemaValidation(userSchema), createUser)
userRouter.get('', authorization, verifyAdminUser, listUser)
userRouter.get('/profile', authorization, retrieveUser)
userRouter.delete('/:uuid', authorization, verifyOwnerUser, deleteUser)
userRouter.patch('/:uuid', authorization, verifyOwnerUser, updateUser)

export default userRouter