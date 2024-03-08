const express = require('express');

// import express from "express";

// create express app
const app = express();

// Define routes
app.get('/', (req, res) => {
    console.log(req.query, req.headers);
    res.send("Over and In");
});

app.get('/ping', (req, res) => {
    res.send("PingPong");
});

app.get('/file', (req, res) => {
    console.log(__dirname);
    res.sendFile(__dirname+ "/index.html");
})

// listen for incoming requests
app.listen(4000, () => {
    console.log("Express app is running!")
});