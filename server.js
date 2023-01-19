const express = require("express");
const path = require("path");
const port = 3000;
const app = express();

app.use(express.json());
app.use(express.static("src"));
app.use(express.static("dist"));


//app.use(express.static(path.join(__dirname, 'dist')));

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public/index.html'));
})

app.get("/hi", (req, res) => {
    res.status(200).json({hi: "this is a message"});
})

app.listen(port, () => {
    console.log(`The app server is running on port: ${port}`);
 });