const app = require ('../app');


const handleServerErrors = (err, req, res, next) => {
    console.log(err)
    res.status(500).send({msg: 'internal server error'})
}


const handleCustomErrors = (err, req, res, next) => {
    if(err.msg === 'no file attached' && err.status === 400) {
        res.status(400).send({msg: 'no file attached'})
    } else {
        next(err);
    }
}


module.exports = {handleServerErrors}