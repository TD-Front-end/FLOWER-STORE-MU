'use strict'
const express = require('express');
const router = express.Router();
const flowerCtrl = require('./controller/FlowerController');
const UserController = require('./controller/UserController');
const CategoryController = require('./controller/CategoryController');
const SupplierController = require('./controller/SupplierController');
const ReceiptController = require("./controller/ReceiptController");

    //CRUD User
    //get
    router.get("/user", UserController.get);
    //insert
    router.post("/user", UserController.insert);
    //update
    router.put("/user/:UserID", UserController.update);
    //detail
    router.get("/user/:UserID", UserController.detail);
    //delete
    router.delete("/user/delete/:UserID", UserController.delete);

    //CRUD Category
    router.get("/category", CategoryController.get);
    //insert
    router.post("/category", CategoryController.insert);
    //detail
    router.get("/category/:CategoryID", CategoryController.detail);
    //update
    router.put("/category/:CategoryID", CategoryController.update);
    //delete
    router.delete("/category/delete/:CategoryID", CategoryController.delete);

    //CRUD Supplier
    //get
    router.get("/supplier", SupplierController.get);
    //inser
    router.post("/supplier", SupplierController.insert);
    //detail
    router.get("/supplier/:SupplierID", SupplierController.detail);
    //update
    router.put("/supplier/:SupplierID", SupplierController.update);
    //delete
    router.delete("/supplier/delete/:SupplierID", SupplierController.delete);

    //CRUD Flower
    //get
    router.get("/flowers",flowerCtrl.get);
    //insert
    router.post("/flowers", flowerCtrl.insert); 
    //detail
    router.get("/flowers/:FlowerID", flowerCtrl.detail);
    //delete
    router.delete("/flowers/delete/:FlowerID", flowerCtrl.delete);
    //update
    router.put("/flowers/:FlowerID", flowerCtrl.update);

    //Receipt
    router.get("/receipt", ReceiptController.get);
    //insert
    router.post("/receipt", ReceiptController.insert);
    //detail
    router.get("/receipt/:ReceiptID", ReceiptController.detail);
    //update
    router.put("/receipt/:ReceiptID", ReceiptController.update);
    //delete
    router.delete("/receipt/delete/ReceiptID", ReceiptController.getReceiptDetaildetail);

    //Cart
    

module.exports = router;