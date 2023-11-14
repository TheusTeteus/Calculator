const express = require('express');
const app = express();
const path = require('path');
const PORT = 3031; 

// Displays html content on browser
app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, "calculadora.html"));
});

// listening all features when server is up
app.listen(PORT, ()=>{
    console.log("Running on port 3031");
});