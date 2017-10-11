import _ from 'lodash';
import axios from 'axios';
import Firebase from 'firebase';
import { FETCH_PROFILES, FETCH_POSTS, DELETE_POST, CREATE_POST }from './types';

//Thunk example
export function fetchUsers(){
    const request = axios.get('http://jsonplaceholder.typicode.com/users');
    return (dispatch) => {
        request.then(({data}) => {
            dispatch({
                type: FETCH_PROFILES,
                payload: data
            });
        });
    };
}

//Firebase example
const Posts = new Firebase('https://scorching-heat-8537.firebaseio.com/');

export function fetchPosts() {
    return dispatch => {
        Posts.on('value', snapshot => {
            dispatch({
                type: FETCH_POSTS,
                payload: snapshot.val()
            });
        });
    };
}

export function createPost(post) {
    return dispatch => Posts.push(post)    
}

export function deletePost(key) {
    return dispatch => Posts.child(key).remove();
}