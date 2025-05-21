const express = require("express");
const cors = require("cors");
require("dotenv").config();
const imageRoutes = require("./routes/images");

const app = express();
app.use(express.json());
app.use(express.json());
app.use("/api/images", imageRoutes);

app.get("/", (req, res) => {
    res.send("Room Makeover Visualizer API running");
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));