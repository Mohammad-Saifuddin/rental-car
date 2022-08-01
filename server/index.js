const express = require("express");
const app = express();
const mongoose = require('mongoose');
const ManagerModel = require('./models/Manager');
const EmployeeModel = require('./models/Employee')
const UserModel = require('./models/User')
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/Rental-car');


//Manager Login

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

//Employee Add to Database

app.post('/api/EmpAdd', async (req,res) =>{
    try {
            const newPassword = await bcrypt.hash(req.body.password, 10)
            await EmployeeModel.create({
                name: req.body.name,
                email: req.body.email,
                username: req.body.username,
                password: newPassword,
                phoneno: req.body.phoneno,
                dob: req.body.dob,

            })
            res.json({ status: 'Added Successfully'})
        } catch(err){
        res.json({ status: 'Email already used'})
    }
    
});

//Employee Login

app.post('/api/Emplogin', async (req,res) =>{
    
    const userE = await EmployeeModel.findOne({
        username: req.body.username,
    })

    if(!userE) { return {status: 'error', error: 'Invalid login'}}

    const isPasswordValid = await bcrypt.compare(req.body.password, userE.password)
    

    if (isPasswordValid){

        const token = jwt.sign(
            {

                username: userE.username,
                password: userE.password,
            
            }, 
            'secrettomeisyou')
        return res.json({ status : 'ok', userE: token})
    } else {
        return res.json({ status : 'ok', userE: false})
    }


});

//user add to database

app.post('/api/UsrAdd', async (req,res) =>{
    try {

            await UserModel.create({
                name: req.body.name,
                email: req.body.email,
                address: req.body.address,
                licenseno: req.body.licenseno ,
                phoneno: req.body.phoneno,
                dob: req.body.dob,

            })
             res.json({ message: 'Added Successfully'})
        } catch(err){
         res.json({ message: 'Email already used'})
    }

});


app.listen(3001, () => {
    console.log("SERVER RUNS PERFECTLY!");
});