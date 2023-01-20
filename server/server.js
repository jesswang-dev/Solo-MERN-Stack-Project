const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const path = require("path");
const mongoose = require("mongoose");
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static("src"));
app.use(express.static("public"));

// app.use(require("./routes/record"));
// // get driver connection
// const dbo = require("./db/conn");


app.get("/", (req, res) => {
    return res.status(200).sendFile(path.join(__dirname, '../public/index.html'));
})

app.get("/hi", (req, res) => {
  res.status(200).json({hi: "this is a message"});
})

// //404 not find page
app.use('*', (req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, '../public/404.html'));
})

// //Global Error handler
// app.use((err, req, res, next) => {
//   const defaultErr = {
//     log: 'Express error handler caught unknown middleware error',
//     status: 400,
//     message: { err: 'An error occurred' },
//   };
//   const errorObj = Object.assign({}, defaultErr, err);
//   console.log(errorObj.log);
//   return res.status(errorObj.status).json(errorObj.message);
// });


app.listen(port, () => {
  // // perform a database connection when server starts
  // dbo.connectToServer(function (err) {
  //   if (err) console.error(err);
 
  // });
  console.log(`The app server is running on port: ${port}`);
});