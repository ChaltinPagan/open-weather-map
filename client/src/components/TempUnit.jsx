import React from 'react';

const TempUnit = ({ handleTempUnit }) => {
    return(
        <section id="temp-choice">
            <div className="btn-group">
                <button type="button" className="btn" id="metric" name="temp_unit" onClick={handleTempUnit}>&deg;C</button>
                <button type="button" className="btn active-temp" id="imperial" name="temp_unit" onClick={handleTempUnit}>&deg;F</button>
            </div>
        </section>
    )
}

export default TempUnit;