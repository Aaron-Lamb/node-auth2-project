const jwt = require('jsonwebtoken');

function validateUser(){
    return (req, res, next) => {
        if(Object.keys(req.body).length === 0){
            return res.status(400).json({
                errorMessage: "Please input the required fields"
            })
        } else if(!req.body.username){
            return res.status(400).json({
                errorMessage: "Please input a username"
            })
        } else if(!req.body.department){
            return res.status(400).json({
                errorMessage: "Please input your department"
            })
        } else{
            next()
        }
    }
}

function restrict(){
    return async (req, res, next) => {
        try{
            const token = req.cookies.token;

            if(!token){
                return res.status(401).json({
                    errorMessage: "Invalid credentials"
                })
            }

            jwt.verify(token, process.env.TOKEN_SECRET, (err, decoded) => {
                if(err){
                    return res.status(401).json({
                        errorMessage: "Invalid credentials"
                    })
                }

                req.token = decoded;

                next()
            })
        } catch(error){
            next(error)
        }
    }
}

module.exports = {
    validateUser,
    restrict
}