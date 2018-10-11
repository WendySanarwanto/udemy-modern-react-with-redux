import React, { Component } from 'react'
import './PostItem.css';
class PostItem extends Component {
  render() {
    const { id, isSelected, title } = this.props;

    return (
      <li className="list-group-item">
        { isSelected !== undefined ? <input type="checkbox" value={id} /> : `` }
        <span className="post-item-title">{title}</span>
      </li>
    );
  }
} 

export default PostItem;