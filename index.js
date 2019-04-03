import express from "express";
// const express = require("express");
const app = express();

const port = 3001;
const handleListening = () => {
  console.log(`Listening on http://localhost:${port}`);
};

app.get("/", (req, res) => {
  //   console.log(req);
  res.send("Hello World!");
});

app.listen(3001, handleListening);
