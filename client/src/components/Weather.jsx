import React, { Component } from 'react';
import axios from 'axios';
import Forecast from './Forecast';
import Form from './Form';
import TempUnit from './TempUnit';

class Weather extends Component {
    constructor(){
        super();
        this.state = {
            location: null,
            forecast: null,
            not_found: false,
            temp_unit: "imperial", 
            city_input: "New York", 
            loading: false
        }
    }

    getWeather = () => {
        const { city_input, temp_unit } = this.state;
        this.setState({ loading: true }, () => {
            axios.get(`/weather/${city_input}/${temp_unit}`)
                .then( res => {
                    setTimeout(() => {
                        console.log(res.data);
                        this.setState({
                            location: res.data.city,
                            forecast: res.data.forecast,
                            loading: false
                        })
                    }, 2000)
                })
                .catch( err => {
                    console.log("Error: city not found.");
                    this.setState({
                        not_found: true,
                        loading: false
                    })
                })
        })
    }

    handleTempUnit = (e) => {
        const { temp_unit } = this.state;
        let c = document.getElementById('metric');
        let f = document.getElementById('imperial');

        if (temp_unit === "fahrenheit") {
            f.classList.remove('active-temp');
            c.classList.add('active-temp');
        } else {
            c.classList.remove('active-temp');
            f.classList.add('active-temp');
        }

        this.setState({ [e.target.name]: e.target.id }, () => {
            this.getWeather();
        })

    }

    handleCityInput = (e) => {
        e.preventDefault();
        this.setState({
            city_input: e.target.value
        })
    }

    componentDidMount = () => {
        this.getWeather();
    }

    render(){
        const { location, forecast, not_found, temp_unit, city_input, loading } = this.state;
        console.log("unit: ", temp_unit)

        if (loading) {
            return (
                <div id="loading">
                    <i className="fas fa-spinner fa-10x fa-pulse"></i>
                </div>
            )
        }

        if (!forecast) {
            return (
                <div id="technical-difficulties">
                    <i className="fas fa-10x fa-exclamation"></i>
                    <p>We are experiencing technical difficulties. <br />
                    Please try again later.</p>
                </div>
            )
        }

        return(
            <section id="weather">
                <header>
                    <h1>5-Day Forecast for {location.name}</h1>
                </header>

                <Form city_input={city_input}
                handleCityInput={this.handleCityInput}
                getWeather={this.getWeather}
                not_found={not_found} />

                <TempUnit handleTempUnit={this.handleTempUnit}/>

                <Forecast forecast={forecast} 
                temp_unit={temp_unit} />

            </section>
        )
    }
}

export default Weather;