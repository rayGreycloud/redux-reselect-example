import React from 'react';
import { Component } from 'react';

import Posts from 'components/posts_list';
import SelectedPostList from 'components/selected_posts_list';

export default () => {
  return (
    <div>
      <h4>Selected Posts</h4>
      <SelectedPostList />
      <hr />
      <h4>All Posts</h4>
      <Posts />
    </div>
  );
}
