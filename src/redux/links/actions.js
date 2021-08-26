import store from '../store';
import {
    ADD_LINK,
    DECREASE_VOTE,
    DELETE_LINK,
    INCREASE_VOTE,
    SET_FILTER,
    SET_LINKS,
} from './types';
import { getList } from '../../helpers/localStorage';

export const addLink = (data) => {
    const state = store.getState().links;
    const newData = {
        ...data,
        id: state.links.length + 1,
        votePoint: 0,
        createdDate: new Date().getTime()
    };

    return {
        type: ADD_LINK,
        payload: newData
    };
};

export const decreaseVote = (id) => {
    return ({
        type: DECREASE_VOTE,
        payload: id
    });
}

export const increaseVote = (id) => {
    return ({
        type: INCREASE_VOTE,
        payload: id
    });
}

export const deleteLink = (id) => ({
    type: DELETE_LINK,
    payload: id
});

export const setFilter = (filterType) => ({
    type: SET_FILTER,
    payload: filterType
});

export const setLinks = () => {
    const links = getList();

    if (links !== null) {
        return {
            type: SET_LINKS,
            payload: links
        };
    }

    return {
        type: SET_LINKS,
        payload: []
    };
};
