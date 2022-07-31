const express = require("express");
const app = express();
const mongoose = require('mongoose');
const ManagerModel = require('./models/Manager');
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/Rental-car');

//app.post('/api/Manlogin', async (req,res) =>{
    //console.log(req.body)
    //try {
        //const newPassword = await bcryp.hash(req.body.password, 10)
        //await ManagerModel.create({
           // username: req.body.name,
           // password: newPassword,

       // })
       // res.json({ status: 'ok'})
    //} catch(err){
       // res.json({ status: 'error', error: 'Dulicte email'})
    //}
//});

app.post('/api/Manlogin', async (req,res) =>{
    
        const user = await ManagerModel.findOne({
            username: req.body.username,
            password: req.body.password,
        })

        //const isPasswordvalid = await bcrypt.compare(req.body.password, user.password)
        //if(isPasswordValid)

        if (user){

            const token = jwt.sign(
                {

                    username: user.username,
                    password: user.password,
                
                }, 
                'secrettomeisyou')
            return res.json({ status : 'ok', user: token})
        } else {
            return res.json({ status : 'ok', user: false})
        }
    
    
});


app.listen(3001, () => {
    console.log("SERVER RUNS PERFECTLY!");
});