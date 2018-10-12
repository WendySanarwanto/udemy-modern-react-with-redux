import React from 'react'
import { connect } from 'react-redux';
import SelectedPostsSelector from '../selector/selected-posts.selector';
import PostItem from './PostItem';
import './SelectedPosts.css';

const SelectedPosts = (props) => {
  return (
    <div className="selected-posts-container">
      { props.posts && props.posts.length > 0 ? 
        <h4>Selected Posts</h4> : '' }
      <ul className="list-group">
        {
          props.posts.map(postItem => {
            return (
              <PostItem key={postItem.id} 
                        id={postItem.id} 
                        title={postItem.title} />
            );
          })
        }
      </ul>
      { props.posts && props.posts.length > 0 ? <hr/> : '' }
    </div>
  );
}

function mapStateToProps(state){
  return { 
    posts: SelectedPostsSelector(state)
  }
}

export default connect(mapStateToProps)(SelectedPosts);