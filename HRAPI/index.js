const express =  require('express');
const cors = require('cors');
const pool = require('./db');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/',async(req,res)=>{
     try{
        res.json('welcome to HR API');
     }
     catch(err){
        res.status(500).json({Error:console.err.message});
       
    }
});

app.get('/country',async(req,res)=>{
    try{
        const result = await pool.query('select * from countries');
         res.json(result.rows);
     }
     catch(err){
        res.status(500).json({Error:console.err.message});
       
    }
});

app.get('/regoin',async(req,res)=>{
    try{
        const result = await pool.query('select * from region');
         res.json(result.rows);
     }
     catch(err){
        res.status(500).json({Error:console.err.message});
       
    }
});

const PORT = process.env.PORT;
app.listen(PORT,()=>{
    console.log(`connected sucessfully....on PORt ${PORT}`);
});