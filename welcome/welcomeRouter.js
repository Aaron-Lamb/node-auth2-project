const express = require('express');

const router = express.Router();

router.get('/', async (req, res, next) => {
    try{
        return res.status(200).json({
            message: "Welcome to Users"
        })
    } catch(error){
        next(error)
    }
})

module.exports = router;