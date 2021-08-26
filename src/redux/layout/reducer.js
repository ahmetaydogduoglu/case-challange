import {
    CLOSE_MODAL,
    SHOW_MODAL,
    CLOSE_TOAST,
    SHOW_TOAST
} from './types';

const initialModal = {
    visibility: false,
    description: '',
    title: '',
    linkName: '',
    confirmButton: () => { }
};

const initialToast = {
    visibility: false,
    text: '',
    type: 'success'
}

const initialState = {
    modal: initialModal,
    toast: initialToast
};

const layoutReducer = (state = initialState, action) => {
    const { payload, type } = action;

    switch (type) {
        case CLOSE_MODAL:
            return {
                ...state,
                modal: initialModal
            };

        case SHOW_MODAL:
            return {
                ...state,
                modal: { ...payload, visibility: true }
            };
        case CLOSE_TOAST:
            return {
                ...state,
                toast: initialToast
            };
        case SHOW_TOAST:
            return {
                ...state,
                toast: { ...payload, visibility: true }
            };
        default:
            return state;
    };
}

export default layoutReducer;
