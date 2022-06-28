'use strict'
const util = require('util')
const mysql = require('mysql')
const conn = require('../db')

module.exports = {
    get:(req,res)=>{
        let sql = "SELECT * from cart where UserID = ?"
        conn.query(sql,[req.params.ReceiptID],(err,reqponse)=>{
            if(err){
                throw err                
            }
            res.json(reqponse)
        })
    },
    insert:(req,res)=>{
        let data = req.body;        
        let sql = 'INSERT INTO cart SET ?'        
        conn.query(sql, [data], (err, result, fields) => { 
            if (err) {
                throw err
            }  
            console.log("result ====>" + result); 
            //console.log("fields ====>" + fields);     
            res.json({message: 'Insert success and id = ' + result.insertId})       
        })
    },
    delete: (req,res)=>{
        let sql ='DELETE from cart where CartID =?'
        conn.query(sql,[req.params.UserID],(err,reqponse)=>{
            if(err){
                throw err                
            }
            res.json({message:'Delete success!'})
        })
    }
}