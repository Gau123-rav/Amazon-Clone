require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
require ('./database/conn');
const cookieParser = require('cookie-parser');
const Products = require('./models/productsSchema');
const DefaultData = require('./defaultdata');
const router = require('./routes/router');
const jwt = require('jsonwebtoken');

app.use(express.json());
app.use(cookieParser(""));
app.use(router);

const PORT = process.env.PORT || 8000;

// For deployment
if(process.env.NODE_ENV === "production"){
    app.use(express.static("client/build"));
}

app.listen(PORT, () => {
    console.log(`Server is running at port no. ${PORT}`);
});

DefaultData();