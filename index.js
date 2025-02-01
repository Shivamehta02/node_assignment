const express = require('express');
const app = express();
const PORT = 3002;

const professorRoutes = require('./routes/professor');
const studentRoutes = require('./routes/student');

app.use(express.json());
app.use('/college/professors', professorRoutes);
app.use('/college/students', studentRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
