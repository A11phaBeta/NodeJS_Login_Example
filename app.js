const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

var router = require('./routes/index');

app.use("/", router);

var sequelize = require('./models/index').sequelize;
sequelize.sync();

app.listen(3000, function(){ 
    console.log('Server start 3000 port!');
  }); 
  