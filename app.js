const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

const postsRoutes = require('./routes/posts'); 
const userRoutes = require('./routes/user'); 
const Post = require('./models/post');


//mongodb://dmunoz:<password>@ac-o2l6rie-shard-00-00.dvrqluh.mongodb.net:27017,ac-o2l6rie-shard-00-01.dvrqluh.mongodb.net:27017,ac-o2l6rie-shard-00-02.dvrqluh.mongodb.net:27017/?ssl=true&replicaSet=atlas-5n0sql-shard-0&authSource=admin&retryWrites=true&w=majority
const app = express();
mongoose.set('strictQuery', false);
mongoose.connect("mongodb://dmunoz:" + process.env.MONGO_ATLAS_PW + "@ac-o2l6rie-shard-00-00.dvrqluh.mongodb.net:27017,ac-o2l6rie-shard-00-01.dvrqluh.mongodb.net:27017,ac-o2l6rie-shard-00-02.dvrqluh.mongodb.net:27017/?ssl=true&replicaSet=atlas-5n0sql-shard-0&authSource=admin&retryWrites=true&w=majority").then(()=> {
    console.log('connected to db');
}).catch((ex) => {
    console.log(ex);
})

app.use(bodyParser.json());
//url encoding
app.use(bodyParser.urlencoded({extended: false}));
app.use("/images", express.static(path.join("backend/images")))

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, DELETE, PUT, PATCH");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
})

app.use("/api/posts", postsRoutes);
app.use("/api/user", userRoutes);

module.exports = app;