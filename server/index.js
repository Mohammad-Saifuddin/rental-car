const express = require("express");
const app = express();
const mongoose = require('mongoose');
const ManagerModel = require('./models/Manager');
const cors = require('cors')

app.use(cors())
app.use

mongoose.connect('mongodb://localhost:27017/Rental-car', {useNewUrlParser: true});

app.post('/api/Manlogin', (req,res) =>{
    console.log(req.body)
    res.json({ status: 'ok'})
})

app.listen(3001, () => {
    console.log("SERVER RUNS PERFECTLY!");
});