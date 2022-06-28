'use strict'
const util = require('util')
const mysql = require('mysql')
const conn = require('../db')

const flowersCtrl = {
    get:(req,res)=>{
        let sql = "SELECT * from flower"
        conn.query(sql,(err,reqponse)=>{
            if(err){
                throw err                
            }
            res.json(reqponse)
        })
    },
    detail:(req,res)=>{
        let sql ='SELECT * from flower where FlowerID =?'
        conn.query(sql,[req.params.FlowerID],(err,reqponse)=>{
            if(err){
                throw err                
            }
            res.json(reqponse[0])
        })
    },
    update:(req,res)=>{
        let data = req.body;
        let flowerID = req.params.FlowerID;
        let sql = 'UPDATE flower SET ? WHERE FlowerID = ?'
        conn.query(sql, [data, flowerID], (err,response) => {
            if (err) {
                res.json({errormessage: err})
            }
                res.json({message: 'Update success!'})
        })
    },
    insert:(req,res)=>{
        let data = req.body;        
        let sql = 'INSERT INTO flower SET ?'        
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
        let sql ='DELETE from flower where FlowerID =?'
        conn.query(sql,[req.params.FlowerID],(err,reqponse)=>{
            if(err){
                throw err                
            }
            res.json({message:'Delete success!'})
        })
    }
}
module.exports = flowersCtrl;