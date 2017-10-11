import _ from 'lodash';
import { FETCH_POSTS, DELETE_POST, CREATE_POST, SELECT_POST } from '../actions/types';

export default function(state = {}, action){
    switch(action.type){
        case FETCH_POSTS:
            return action.payload;
        case CREATE_POST:
            return Object.assign({}, state, action.payload);
        case DELETE_POST:
            return _.omit(state, action.payload);
        default:
            return state;
    }    
}

export function selectedPosts(state = [], action){
    switch(action.type){
        case SELECT_POST:        
            return [...state, action.payload];
        default:
            return state;
    }
}