const express = require("express");
const router = express.Router();

// const { listUsers, getUser, addUser } = require("../services");
const cvController = require("../controllers/cv.controller");
const userController = require("../controllers/users.controllers");

router.post("/create", cvController.addCV);

router.get("/findAll", cvController.findAllCVs);

router.get("/findASingleUser/:userId", userController.findASingelUser);

router.patch("/update/:userId", userController.updateUser);

module.exports = router;
