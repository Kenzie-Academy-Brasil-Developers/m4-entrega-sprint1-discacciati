import jwt from 'jsonwebtoken'

const authorization = (req, res, next) => {
    
    let token = req.headers.authorization
  
    if(!token){
        return res.status(401).json({
            message: "Missing authorization headers"
        })
    }

    token = token.split(" ")[1]

    jwt.verify(token, "key123456@!", (error, decoded) => {
        if(error){
            return res.status(401).json({
                message: "Unauthorized"
            })
        }

        req.user = {
            uuid: decoded.sub,
            isAdm: decoded.isAdm
        }

    })

    next()
}

export default authorization