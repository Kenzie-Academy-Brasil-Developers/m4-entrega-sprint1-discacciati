const verifyAdminUser = (req, res, next) => {

    const { isAdm} = req.user

    if(isAdm ){    
        next()
    } 

    return res.status(401).json({
        message: "Unauthorized"
     })
}

export default verifyAdminUser


