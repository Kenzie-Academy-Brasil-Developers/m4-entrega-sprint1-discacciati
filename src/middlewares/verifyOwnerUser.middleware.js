const verifyOwnerUser = (req, res, next) => {
  
    const { uuid , isAdm} = req.user

    const userId = req.params.uuid

    if(userId === uuid){
        
        next()
    } 

    if(isAdm){
        
        next()
    } 
    return res.status(401).json({
        message: "Missing admin permissions"

     })

}

export default verifyOwnerUser