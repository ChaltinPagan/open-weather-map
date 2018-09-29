const express = require('express');
const logger = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const axios = require('axios');
const port = 8000;

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function (req, res, next) {
    // res.sendFile(path.join(__dirname, 'routes.html'));
    res.send("Open Weather Map Routes");
});

app.get('/weather', function (req, res, next) {
    axios.get('https://api.openweathermap.org/data/2.5/forecast?id=5128638&units=imperial&APPID=a945190d5fdbc488a8c5fcd360fc22be')
        .then( response => {
            res.status(200)
                .send({
                    status: 'success',
                    data: response.data
                });
        })
        .catch( err => {
            console.log(err);
        })
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});