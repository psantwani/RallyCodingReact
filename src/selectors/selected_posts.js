import _ from 'lodash';
import { createSelector } from 'reselect';

const postsSelector = state => state.posts;
const selectedPostsSelector = state => state.selectedPostIdsl

const getPosts = (posts, selectedPostIds) => {
    console.log('getPosts hit')
    const selectedPosts = _.filter(
        posts,
        post => _.contains(selectedPostIds, post.id)
    );
    
    return selectedPosts;
}

export default createSelector(
    postsSelector,
    selectedPostsSelector,
    getPosts
);