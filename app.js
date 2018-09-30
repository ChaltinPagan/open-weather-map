const express = require('express');
const logger = require('morgan');
const app = express();
const axios = require('axios');
const key = require('./env.js');
const port = 8000;

app.use(logger('dev'));

app.get('/', function (req, res, next) {
    res.send("Open Weather Map Routes");
});

app.get('/weather/:city/:units', function (req, res, next) {
    axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${req.params.city}&units=${req.params.units}&APPID=${key.api_key}`)
        .then( response => {
            let five_day = response.data.list.filter( el => {
                if (el.dt_txt.includes("12:00:00")) {
                    return el;
                }
            })

            res.status(200)
                .send({
                    status: 'success',
                    city: response.data.city,
                    forecast: five_day
                });
            
        })
        .catch( err => {
            console.log(err);
            res.status(404)
                .send({
                    status: 'not found',
                    message: "City not found."
                })
        
        })
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});