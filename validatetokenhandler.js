const jwt  = require("jsonwebtoken");

const validateToken = async(req,res)=>{
    let token;
    let authHeader = req.headers.Authorization || req.header.authorization;
    if(authHeader && authHeader.startsWith("Bearer")){
        token = authHeader.split(" ")[1];
        jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(err,decoded)=>{
            if(err){
                res.status(401);
                throw new Error("user not authorized")
            }
            req.user = decoded.user;
        })
        if(!token){
            res.status(401);
            throw new Error("user is not authorized")
        }
    }
}

module.exports = validateToken;