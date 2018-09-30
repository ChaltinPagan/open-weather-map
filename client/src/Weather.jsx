import React, { Component } from 'react';
import axios from 'axios';

class Weather extends Component {
    constructor(){
        super();
        this.state = {
            forecast: null
        }
    }

    getWeather = () => {
        axios.get('/weather')
        .then( res => {
            console.log(res.data);
            let list = res.data.list[0]
            this.setState({
                forecast: list
            })
        })
        .catch( err => {
            console.log(err);
        })
    }

    componentDidMount = () => {
        this.getWeather();
    }

    render(){
        console.log("forecast: ", this.state.forecast)
        return(
            <section id="weather">
                <h1>Forecast</h1>
            </section>
        )
    }
}

export default Weather;