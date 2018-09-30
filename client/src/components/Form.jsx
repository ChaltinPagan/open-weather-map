import React from 'react';
import Alert from './Alert';

const Form = ({ city_input, handleCityInput, getWeather, not_found }) => {
    return (
        <section id="city">
            <input id="city-input" type="text" value={city_input} onChange={handleCityInput} /><br />

            <button type="button" className="btn" id="city-submit" onClick={getWeather}>Submit</button>

            <Alert not_found={not_found} />
        </section>
    )
}

export default Form;