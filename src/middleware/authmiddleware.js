import jwt from 'jsonwebtoken';

function authmiddleware(req,res,next) {
    const token  = req.headers['authorization']?.split(' ')[1];
    if(!token){return res.status(401).send({message : `access denied no token`})};
    jwt.verify(token,process.env.JWT_SECRET,(err,decoded)=>{
        if(err){return res.status(401).send({message : `invalid token`})};
        req.userId = decoded.id;
        next();
    })
}
export default authmiddleware;