const models = require("../models");
const sequelize = require("sequelize");
const op = sequelize.Op;

function addUser(data){
    return new Promise((resolve, reject) => {
        if(data.email == null || data.passwd == null || data.name == null){
            return reject({"status" : 400, "message" : "Bad request"})
        }

        models.user.create({
            email : data.email,
            passwd : data.passwd,
            name : data.name
        }).then(response => {
            if(response != null) return resolve({"status" : 200, "message" : "Success"})
            return reject({"status" : 500, "message" : "Server internal error"});
        }).catch(error => {
            console.log("#addUser : " + error)
            return reject({"status" : 500, "message" : "Server internal error"});
        })
    });
}

function doLogin(data){ 
    return new Promise((resolve, reject) => {
        if(data.email == null || data.passwd == null) { return reject({"status" : 400, "message" : "Bad request"}); }

        models.user.findOne({
            where : {
                email : {
                    [op.eq] : data.email
                },
                passwd : {
                    [op.eq] : data.passwd
                }
            }
        }).then(response => {
            if(response != null){ return resolve({"status" : 200, "message" : "Success", "id" :response.dataValues.id})}
            else return reject({"status" : 401, "message" : "Not permissioned"})
        }).catch(error => {
            return reject({"status" : 500, "message" : "Server internal error"})
        })
    }
)}

module.exports = {addUser, doLogin}