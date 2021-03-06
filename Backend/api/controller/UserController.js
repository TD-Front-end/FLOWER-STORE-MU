'use strict'
const util = require('util')
const mysql = require('mysql')
const conn = require('../db')

const UserController = {
    get:(req,res)=>{
        let sql = "SELECT * from user"
        conn.query(sql,(err,reqponse)=>{
            if(err){
                throw err                
            }
            res.json(reqponse)
        })
    },
    detail:(req,res)=>{
        let sql ='SELECT * from user where UserID =?'
        conn.query(sql,[req.params.UserID],(err,reqponse)=>{
            if(err){
                throw err                
            }
            res.json(reqponse[0])
        })
    },
    update:(req,res)=>{
        let data = req.body;
        let userID = req.params.UserID;
        let sql = 'UPDATE user SET ? WHERE UserID = ?'
        conn.query(sql, [data, userID], (err,response) => {
            if (err) {
                res.json({errormessage: err})
            }
                res.json({message: 'Update success!'})
        })
    },
    insert:(req,res)=>{
        let data = req.body;        
        let sql = 'INSERT INTO user SET ?'        
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
        let sql ='DELETE from user where UserID =?'
        conn.query(sql,[req.params.UserID],(err,reqponse)=>{
            if(err){
                throw err                
            }
            res.json({message:'Delete success!'})
        })
    }
}

module.exports = UserController;