import React from 'react';

const TempUnit = ({ handleTempUnit, temp_unit }) => {
    return(
        <section id="temp-choice">
            <div className="btn-group">
                <button type="button" className={temp_unit === "metric" ? "btn active-temp" : "btn"} id="metric" name="temp_unit" onClick={handleTempUnit}>&deg;C</button>
                <button type="button" className={temp_unit === "imperial" ? "btn active-temp" : "btn"} id="imperial" name="temp_unit" onClick={handleTempUnit}>&deg;F</button>
            </div>
        </section>
    )
}

export default TempUnit;