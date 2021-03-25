require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();

//conectiong to DB
mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });
//connection error handling
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.listen(process.env.PORT, () => console.log(`app listening on port ${process.env.PORT}`));