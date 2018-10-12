// Reselect selector
// Takes a list of posts and post Ids, and picks out 
// the selected Post
import _ from 'lodash';
import { createSelector } from 'reselect';

// Create select functions to pick off the pieces of state 
//  we care about for this calculation

const postsSelector = state => state.postItems;
const selectedPostsSelector = state => state.selectedPostIds;

const getPosts = (posts, selectedPostIds) =>{
  const selectedPosts = _.filter(
    posts, 
    post => _.includes(selectedPostIds, post.id)
  );

  return selectedPosts;
}

export default createSelector(
  postsSelector,  // pick off a piece of state
  selectedPostsSelector, // pick off a piece of state
  getPosts // Last argument is the function that has our select logic
);