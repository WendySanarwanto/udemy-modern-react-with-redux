import _ from 'lodash';
import React, { Component } from 'react'
import { connect } from 'react-redux';

import { fetchPosts } from '../action';
import PostItem from './PostItem';

class AllPosts extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPostItems(postItems){
    return _.map(postItems, postItem => {
      return (
        <PostItem key={postItem.id} 
                  id={postItem.id} 
                  isSelected={postItem.isSelected}
                  title={postItem.title} />
      );
    });
  }

  render() {
    const { postItems } = this.props;
    if (!postItems) {
      return (<div>Loading ...</div>);
    }
    // console.log(`[DEBUG] - <AllPosts.render> postItems: \n`, postItems);

    return (
      <div>
        <h4>All Posts</h4>
        <ul className="list-group">
          {this.renderPostItems(postItems)}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    postItems: state.postItems
  }
}

export default connect(mapStateToProps, { fetchPosts })(AllPosts);
