const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const userRouter = require('./routes/user.route');

require('dotenv').config();
require('./libs/dbConnect');

const app = express();


app.set('views', './views');
app.set('view engine', 'ejs');
app.use(morgan('dev'));



app.get('/', (req, res) => {
    res.render('index', { message: 'Hello From Node.js' });
    });
    app.get('/contact', (req, res) => {
    res.render('index', { message: 'The Contact Page' });
    });
    app.get('/about', (req, res) => {
    res.render('index', { message: 'The About Page' });
    });
    app.get('*', (req, res) => {
        res.status(404).render('index', { message: 'Not Found' });
        });
const PORT = 3000;
app.listen(PORT, () => {
console.log(`Server running on port ${PORT}`);
});
app.use('/users', userRouter);