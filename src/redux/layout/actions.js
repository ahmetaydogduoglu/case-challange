import {
    CLOSE_MODAL,
    SHOW_MODAL,
    CLOSE_TOAST,
    SHOW_TOAST
} from './types';

export const closeModal = () => {
    return ({
        type: CLOSE_MODAL
    });
}

export const showModal = (modal) => {
    return ({
        type: SHOW_MODAL,
        payload: modal
    });
}

export const showToast = (toast) => {
    return ({
        type: SHOW_TOAST,
        payload: toast
    });
}

export const closeToast = () => {
    return ({
        type: CLOSE_TOAST
    });
}
