const express = require('express');
const fs = require('fs');
const router = express.Router();

const filePath = './data/professor.json';


const readData = () => {
    try {
        return JSON.parse(fs.readFileSync(filePath, 'utf8'));
    } catch (err) {
        return [];
    }
};


const writeData = (data) => {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
};

// Get professor by ID
router.get('/:id', (req, res) => {
    const data = readData();
    const professor = data.find(p => p.id == req.params.id);
    if (professor) {
        res.json(professor);
    } else {
        res.status(404).json({ message: 'Professor not found' });
    }
});

// Add a professor
router.post('/', (req, res) => {
    const data = readData();
    const newProfessor = req.body;
    data.push(newProfessor);
    writeData(data);
    res.json({ message: 'Professor added successfully' });
});

// Update professor by ID
router.put('/:id', (req, res) => {
    let data = readData();
    const index = data.findIndex(p => p.id == req.params.id);
    if (index !== -1) {
        data[index] = { ...data[index], ...req.body };
        writeData(data);
        res.json({ message: 'Professor updated successfully' });
    } else {
        res.status(404).json({ message: 'Professor not found' });
    }
});

module.exports = router;
