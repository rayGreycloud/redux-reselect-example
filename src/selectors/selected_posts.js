// Reselect selector
// Takes a list of post Ids and
// Picks out selected posts
import _ from 'lodash';
import { createSelector } from 'reslect';

// Create select functions to pick off
// pieces of state needed
const postsSelector = state => state.posts;
const selectedPostsSelector = state => state.selectedPostIds;

// search posts for selected posts
const getPosts = (posts, selectedPostIds) => {
  const selectedPosts = _.filter(
    posts,
    post => _.contains(selectedPostIds, post.id)
  );

  return  selectedPosts;
};

export default createSelector(
  postsSelector, // pick off piece of state
  selectedPostsSelector, // pick off piece of state
  getPosts  // last argument is the function with select logic
);
