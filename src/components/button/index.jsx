import React from 'react';
import classNames from 'classnames';

//style
import './button.scss';

const Button = ({ children, onClick, size = 'medium', ...props }) => {
    return (
        <button
            className={classNames('appButton', `appButton--${size}`)}
            onClick={onClick}
            test-id="button"
            {...props}>
            {children}
        </button>
    );
}
export default Button;
