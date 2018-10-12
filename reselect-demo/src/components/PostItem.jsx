import React, { Component } from 'react'
import { connect } from 'react-redux';

import './PostItem.css';
import { selectPost } from '../action';

class PostItem extends Component {

  onInputCheckboxChange(e){
    const { id, selectPost } = this.props;
    const { checked } = e.target;
    console.log(`[DEBUG] - <PostItem.onInputCheckboxChange> id: ${id}`);
    console.log(`[DEBUG] - <PostItem.onInputCheckboxChange> e.target.checked: \n`, e.target.checked);
    // console.log(`[DEBUG] - <PostItem.onInputCheckboxChange> this.props.isSelected: ${this.props.isSelected}`);
    selectPost(id, checked);
  }

  render() {
    const { id, isSelected, title } = this.props;

    return (
      <li className="list-group-item">
        { isSelected !== undefined ? 
          <input type="checkbox" value={id} 
                onChange={this.onInputCheckboxChange.bind(this)}                
                /> : 
          `` }
        <span className="post-item-title">{title}</span>
      </li>
    );
  }
} 

export default connect(null, { selectPost })(PostItem);