import React from 'react';

//style
import './modal.scss';

//redux
import { useSelector, useDispatch } from 'react-redux';
import { closeModal } from '../../redux/layout/actions';

//components
import Button from '../button';

function Modal() {
    //redux
    const { modal: {
        visibility,
        description,
        title,
        linkName,
        confirmButton
    } } = useSelector(state => state.layout);
    const dispatch = useDispatch();

    const close = () => {
        dispatch(closeModal());
    }

    const confirm = () => {
        confirmButton?.();
        close();
    }

    return (
        visibility &&
        <div className="modal">
            <div className="modal-container">
                <div className="modal-header">
                    <span>{title}</span>
                    <div className="modal-close" onClick={close}>X</div>
                </div>
                <div className="modal-content">
                    <div className="modal-textContent">
                        <span>{description}</span>
                        <span>{linkName}</span>
                    </div>
                    <div className="modal-buttonRow">
                        <Button onClick={confirm}>OK</Button>
                        <Button onClick={close}>CANCEL</Button>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Modal
