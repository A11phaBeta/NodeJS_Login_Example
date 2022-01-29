const Sequelize = require('sequelize');

module.exports = ((sequelize,DataTypes)=>{

    var schema = sequelize.define('user',{
        email : {
            type : Sequelize.TEXT,
            allowNull : false
        },
        passwd : {
            type : Sequelize.TEXT,
            allowNull : false
        },
        name : {
            type : Sequelize.TEXT,
            allowNull : false
        }
    },{
        timestamps:true,
        paranoid : true,
        charset: 'utf8',
        collate: 'utf8_unicode_ci',
    });

    schema.associate = models => {
        
    };
    return schema;
})