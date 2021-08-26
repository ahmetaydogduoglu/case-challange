import React, { useEffect, useState } from 'react';
import classNames from 'classnames';

//style
import './toast.scss';

//redux
import { useSelector, useDispatch } from 'react-redux';
import { closeToast } from '../../redux/layout/actions';

function Toast() {
    //state 
    const [timeoutValue, setTimeoutValue] = useState();

    //redux
    const { toast: {
        visibility,
        text,
        type
    }, toast } = useSelector(state => state.layout);
    const dispatch = useDispatch();

    let timeout;

    useEffect(() => {
        if (visibility) {
            clearTimeout(timeoutValue);

            setTimeoutValue(setTimeout(() => {
                dispatch(closeToast());
            }, 4000));
        }

        return () => {
            clearTimeout(timeout);
        }
    }, [toast])

    return (
        visibility &&
        <div className={classNames('toast', `toast--${type}`)}>
            <span>{text}</span>
        </div>
    );
}

export default Toast
