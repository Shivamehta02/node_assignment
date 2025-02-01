const express = require("express");
const app = express();
const yatriRoutes = require("./routes/yatri");

app.use(express.json()); // Middleware to parse JSON
app.use("/yatri/profile", yatriRoutes);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
