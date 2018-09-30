import React from 'react';

const Alert = ({ not_found }) => {
    if (not_found) {
        return (
            <p id="no-city" className="alert alert-warning" role="alert">City not found.</p>
        )
    }

    return <p id="no-city"></p>
}

export default Alert;