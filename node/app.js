const express = require('express');
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
    app.use(morgan('common'))


app.all(process.env.API_BASE + "*", (req, res, next) => {
    return next()
});


const port = process.env.PORT;
const server = app.listen(port, () => {
    console.log(`Listening on port ${port}.\nBase URL: ${process.env.API_BASE}`);
});



