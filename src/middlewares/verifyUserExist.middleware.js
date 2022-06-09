import users from "../database"

const verificaUsuarioExiste = (req, res, next) => {
    const userId = req.params.uuid
    const userIndex = users.findIndex(user => user.uuid === userId)

    if(userIndex === -1){
        return res.status(404).json({
            message: 'User not found'
        })
    }

    req.userIndex = userIndex

    next()
}

export default verificaUsuarioExiste