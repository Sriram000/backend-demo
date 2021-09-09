const express = require("express");
const router = express.Router();
const calculator = require("calculator");

router.route("/").get((req, res) => {
    const {op, op1, op2} = req.query;
    res.send(String(calculator[op](Number(op1), Number(op2))));
});

module.exports = router;
