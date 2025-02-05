const express = require('express');
const fs = require('fs');
const router = express.Router();

const filePath = './data/student.json';


const readData = () => {
    try {
        return JSON.parse(fs.readFileSync(filePath, 'utf8'));
    } catch (err) {
        return [];
    }
};


router.get('/', (req, res) => {
    const data = readData();
    res.json(data);
});


router.get('/:id', (req, res) => {
    const data = readData();
    const student = data.find(s => s.stud_id == req.params.id);
    if (student) {
        res.json(student);
    } else {
        res.status(404).json({ message: 'Student not found' });
    }
});

module.exports = router;
