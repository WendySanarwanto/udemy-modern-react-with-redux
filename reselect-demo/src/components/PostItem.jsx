import React, { Component } from 'react'
import './PostItem.css';

import { select_post } from '../actions';

class PostItem extends Component {
  onCheckboxChange(event) {
    const { checked } = event.target;
    if (checked) {
      const { id, selectItem } = this.props;
      // Invoke select post item's action creator
      selectItem(id);
    }
  }

  render() {
    const { id, isSelected, title } = this.props;

    return (
      <li className="list-group-item">
        { isSelected !== undefined ? 
          <input type="checkbox" value={id} onChange={this.onCheckboxChange.bind(this)} /> : 
          `` }
        <span className="post-item-title">{title}</span>
      </li>
    );
  }
} 

export default PostItem;