import React, { Component } from 'react'
import { connect } from 'react-redux';

class SelectedPosts extends Component {
  renderSelectedPostItems(selectedPostIds){
    // TODO: Render Selected Post Items
  }

  render() {
    const { selectedPostIds } = this.props;
    if (!selectedPostIds) {
      return (<div>Loading ...</div>);
    }
    console.log(`[DEBUG] - <SelectedPosts.render> selectedPostIds: \n`, selectedPostIds);
    return (
      <div>
        <h4>Selected Posts</h4>
        <ul className="list-group">
          {this.renderSelectedPostItems(selectedPostIds)}
        </ul>
      </div>
    );
  }
}

function mapStateToProps({selectedPostIds}){
  return { selectedPostIds }
}

export default connect(mapStateToProps)(SelectedPosts);