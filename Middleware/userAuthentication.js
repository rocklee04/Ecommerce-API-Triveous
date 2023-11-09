const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();


function verfiyToken(req, res, next) {
    const token = req.header('Authorization');

    if(!token) {
        return res.status(401).json({message:'No token provided'});
    }

    jwt.verify(token, process.env.privateKey, (err, decoded) => {
        if(err) {
            return res.status(403).json({message: 'Failed to authenticate token'});
        }
        req.userId = decoded.id;
        next();
    });
} 

module.exports = {
    verfiyToken,
}