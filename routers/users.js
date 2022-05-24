const express = require('express');
const router = express.Router();

router.use(login);

router.get('/', auth, (req, res) => {
    console.log(`User is admin = ${req.admin}`);
    showDashboard(res)
})

function auth(req, res, next){
    if(req.query.admin === 'true'){
        req.admin = true;
        console.log('auth success!');
        next()

    }else{
        res.send('fail auth');
    }
}

function login(req, res, next){
    console.log('logging in');
    next();
}

function showDashboard(res){
    res.send(`dashboard`);
}

module.exports = router

