import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../actions';

class PostsIndex extends Component {

  componentDidMount(){
    this.props.fetchPosts();
  }

  renderPosts() {
    const { posts } = this.props;
    // console.log(`[DEBUG] - <PostsIndex.render> posts: \n`, posts);
    // _.map converts object with properties back to array of objects.
    return _.map(posts, post => {
      return (
        <li className="list-group-item" key={post.id}>
          <Link to={`/posts/${post.id}`}>{post.title}</Link>
        </li>
      );
    }); 
  }

  render() {
    return (
      <div>
        <div className="add-post-container text-xs-right">
          <Link className="btn btn-primary" to="/posts/new">
            Add a Post
          </Link>
        </div>
        <h3>Posts</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state){
  // console.log(`[DEBUG] - <PostsIndex.mapStateToProps> state: \n`, state);
  return { posts: state.posts }
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
