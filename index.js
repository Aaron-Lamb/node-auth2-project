const express = require('express');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
const cors = require('cors');
const welcomeRouter = require('./welcome/welcomeRouter');
const userRouter = require('./users/user-router');

const server = express();
const port = process.env.PORT || 4000;

server.use(express.json());
server.use(helmet());
server.use(cors());
server.use(cookieParser());
server.use(welcomeRouter);
server.use(userRouter);

server.use((err, req, res, next) => {
    console.log(err);
    return res.status(500).json({
        errorMessage: "A server error has occurred"
    });
});

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});