'use strict'
const util = require('util')
const mysql = require('mysql')
const conn = require('../db')

const SupplierController = {
    get:(req,res)=>{
        let sql = "SELECT * from supplier"
        conn.query(sql,(err,reqponse)=>{
            if(err){
                throw err                
            }
            res.json(reqponse)
        })
    },
    detail:(req,res)=>{
        let sql ='SELECT * from supplier where SupplierID =?'
        conn.query(sql,[req.params.SupplierID],(err,reqponse)=>{
            if(err){
                throw err                
            }
            res.json(reqponse[0])
        })
    },
    update:(req,res)=>{
        let data = req.body;
        let supplierID = req.params.SupplierID;
        let sql = 'UPDATE supplier SET ? WHERE SupplierID = ?'
        conn.query(sql, [data, supplierID], (err,response) => {
            if (err) {
                res.json({errormessage: err})
            }
                res.json({message: 'Update success!'})
        })
    },
    insert:(req,res)=>{
        let data = req.body;        
        let sql = 'INSERT INTO supplier SET ?'        
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
        let sql ='DELETE from supplier where SupplierID =?'
        conn.query(sql,[req.params.SupplierID],(err,reqponse)=>{
            if(err){
                throw err                
            }
            res.json({message:'Delete success!'})
        })
    }
}

module.exports = SupplierController;