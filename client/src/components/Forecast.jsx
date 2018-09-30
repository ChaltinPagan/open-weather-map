import React from 'react';

const Forecast = ({ forecast, temp_unit }) => {
    return (
        <section id="forecast">
        {forecast.map( (el, i) =>
            <section className="daily-forecast card" key={i}>
                <h5 id="day" className="card-header">{new Date(el.dt_txt).toUTCString().slice(0, 16)}</h5>
                <div className="card-body">
                    <img src={`http://openweathermap.org/img/w/${el.weather[0].icon}.png`} alt={el.weather[0].main} id="condition-icon"/>
                    <p id="condition-text" className="card-title">{el.weather[0].description}</p>
                    <hr />
                    <p id="high-temp">Temp:{" "}{el.main.temp}</p>
                    <p id="humidity">Humidity:{" "}{el.main.humidity}%</p>
                </div>
            </section>
            )}
        </section>
    )
}

export default Forecast;