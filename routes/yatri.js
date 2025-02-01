const express = require("express");
const router = express.Router();

router.get("/stud/:username", (req, res) => {
    const { username } = req.params;
    if (username === "Daniel") {
        res.send({ message: "Student name is Daniel" });
    } else {
        res.send({ message: "Student name is not Daniel" });
    }
});

router.post("/prof/:username", (req, res) => {
    const { username } = req.params;
    res.send({ message: `Welcome to this page - ${username}` });
});

router.post("/emp", (req, res) => {
    res.send({ message: "Hey you are new here" });
});

module.exports = router;
