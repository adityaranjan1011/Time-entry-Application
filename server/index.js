const express = require('express');
const app = express();
const cors = require("cors");
const pool = require('./db')
// var bodyParser = require('body-parser');


app.use(cors());
app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: false }));

app.post("/api/register", async(req,res) => {

    try{        
        const register = await pool.query(
       "INSERT INTO registration(reg_name,user_name,reg_email) VALUES('"+req.body.reg_name+"','"+req.body.user_name+"','"+req.body.reg_email+"') RETURNING *");     
        res.json(register);       

    }catch(err){
        console.log(err.message);
    }
})

app.get("/api/register",async(req,res) =>{
    try{
        const allRegistered = await pool.query("SELECT * FROM registration");
        res.json(allRegistered.rows);

    }catch(err){
        console.log(err.message);
    }
})

app.post("/api/timeEntry", async(req,res) => {

    try{        
        console.log(req.body);
        const entry = await pool.query(
       "INSERT INTO timeentry(user_name,project_name,start_time,end_time) VALUES('"+req.body.user_name+"','"+req.body.project_name+"','"+req.body.start_time+"','"+req.body.end_time+"') RETURNING *");     
        res.json(entry);       

    }catch(err){
        console.log(err.message);
    }
})

app.listen(5000,()=>{
    console.log("Server has started on port 5000");
});