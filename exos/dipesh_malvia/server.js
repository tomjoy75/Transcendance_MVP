import express from "express";

const PORT = process.env.PORT || 8080;
const app = express();

app.get("/", (req, res) => {
  res.json("App is running on Docker container!")  
});

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
});