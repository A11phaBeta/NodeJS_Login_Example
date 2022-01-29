var express = require('express');
var router = express.Router();

var userEngine = require("../../engine/user")

router.post("/signin", function(req, res){
    userEngine.doLogin(req.body).then(response => {
        return res.status(response.status).send(response);
    }).catch(error => {
        return res.status(error.status).send(error);
    })
})

router.post("/signup", function(req,res){
    userEngine.addUser(req.body).then(response => {
        return res.status(response.status).send(response);
    }).catch(error => {
        return res.status(error.status).send(error);
    })
})

module.exports = router;