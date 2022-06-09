import loginUserService from "../services/sessions/loginUser.service"

export async function loginUser(req, res){

    try {
        const token = await loginUserService(req.body)
        return res.status(200).json({token})
    } catch (error) {
        return res.status(401).json({
            message: error.message
        })
    }
}