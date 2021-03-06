require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const postsRouter = require('./routes/posts');
const commentsRouter = require('./routes/comments');
const userRouter = require('./routes/user');
const cors = require('cors')
require('./passport');

const app = express();

//miiddlewares
app.use(express.urlencoded({
  extended: false
}));
app.use(express.json());
app.use(cors({ origin: 'http://localhost:3000' }));
//routes
app.use('/user', userRouter);
app.use('/posts', postsRouter);
app.use('/comments', commentsRouter);

//conectiong to DB
mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });

//connection error handling
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.listen(process.env.PORT, () => console.log(`app listening on port ${process.env.PORT}`));