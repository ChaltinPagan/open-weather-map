const express = require('express');
const logger = require('morgan');
const path = require('path');
const app = express();
const axios = require('axios');
const key = process.env.API_KEY;
const port = process.env.PORT || 8000;

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/', function (req, res, next) {
    res.send("Open Weather Map Routes");
});

app.get('/weather/:city/:units', function (req, res, next) {
    axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${req.params.city}&units=${req.params.units}&APPID=${key}`)
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

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});