const express = require("express");
const app = express();

app.get("/health", (req, res) => {
    res.json({ status: "UP" });
});

app.listen(3000, "0.0.0.0", () => {
    console.log("Server running on 3000");
});
