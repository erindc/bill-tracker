const express = require('express');
const expressValidator = require("express-validator");
const morgan = require('morgan');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
dotenv.config();

if (dotenv.error != null) {
    console.log('Unable to find/parse .env');
    console.log(JSON.stringify(dotenv));
    process.exit(1);
}
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());
app.use(morgan('tiny'));
require('./bills/routes')(app);
require('./paychecks/routes')(app);


app.all(process.env.API_BASE + "*", (req, res, next) => {
    return next()
});


const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Listening on port ${port}.\nBase URL: ${process.env.API_BASE}`);
});



