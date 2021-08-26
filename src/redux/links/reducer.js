import { filters } from '../../helpers/filtersType';
import { filterSorting } from '../../helpers/filterSort';
import { saveList } from '../../helpers/localStorage';
import {
    ADD_LINK,
    DECREASE_VOTE,
    DELETE_LINK,
    INCREASE_VOTE,
    SET_FILTER,
    SET_LINKS
} from './types';

const initialState = {
    links: [],
    selectedFilter: filters.default
}

const linksReducer = (state = initialState, action) => {
    const { payload, type } = action;

    switch (type) {
        case ADD_LINK:
            const newLinks = [
                ...state.links, {
                    ...payload,
                    id: state.links.length + 1,
                    votePoint: 0,
                    createdDate: new Date().getTime()
                }
            ];

            saveList(newLinks);

            return {
                ...state,
                links: newLinks
            };
        case INCREASE_VOTE: {
            const links = [...state.links];
            const foundIndex = links.findIndex(item => item.id === payload);

            if (foundIndex > -1) {
                links[foundIndex] = {
                    ...links[foundIndex],
                    lastVoteDate: new Date().getTime(),
                    votePoint: links[foundIndex].votePoint + 1
                };

                saveList(links);

                return {
                    ...state,
                    links: filterSorting[state.selectedFilter]([...links])
                };
            }

            return state;
        }
        case DECREASE_VOTE: {
            const links = [...state.links];
            const foundIndex = links.findIndex(item => item.id === payload);

            if (foundIndex > -1 && links[foundIndex].votePoint !== 0) {
                links[foundIndex] = {
                    ...links[foundIndex],
                    lastVoteDate: new Date().getTime(),
                    votePoint: links[foundIndex].votePoint - 1
                };

                saveList(links);

                return {
                    ...state,
                    links: filterSorting[state.selectedFilter]([...links])
                };
            }

            return state;
        }
        case SET_FILTER:
            return {
                ...state,
                selectedFilter: payload,
                links: filterSorting[payload]([...state.links])
            }
        case SET_LINKS: {
            return {
                ...state,
                links: filterSorting[state.selectedFilter](payload)
            };
        }
        case DELETE_LINK: {
            const newLinks = [...state.links].filter(item => item.id !== payload);
            saveList(newLinks);

            return {
                ...state,
                links: newLinks
            }
        }
        default:
            return state;
    }
}

export default linksReducer;
