import React from 'react';

//style
import './input.scss';

const Input = ({ label, value, onChange, placeholder, inputProps }) => {
    return (
        <div className="appInput" test-id="input-container">
            <span className="appInput-label" test-id="input-label">{label}</span>
            <input
                className="appInput-input"
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                test-id="input"
                {...inputProps} />
        </div>
    );
}

export default Input;
