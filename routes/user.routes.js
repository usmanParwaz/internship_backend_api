const express = require("express");
const router = express.Router();

// const { listUsers, getUser, addUser } = require("../services");
const userController = require("../controllers/users.controllers");

router.post("/create", userController.addUser);

router.get("/findAll", userController.findAllUsers);

router.get("/findASingleUser/:userId", userController.findASingelUser);

router.patch("/update/:userId", userController.updateUser);

module.exports = router;
