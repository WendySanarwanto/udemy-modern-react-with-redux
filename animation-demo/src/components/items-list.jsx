import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import { removeItem } from '../actions';
import './items-list.css';

class ItemsList extends Component {
  onRemoveItem(item){
    // console.log(`[DEBUG] - <ItemsList.onRemoveIte> item: \n`, item);
    // console.log(`[DEBUG] - <ItemsList.onRemoveIte> this: \n`, this.props);
    this.props.removeItem(item);
  }

  renderItems(items) {
    // console.log(`[DEBUG] - <ItemsList.renderItems> items: \n`, items);
    return (
      _.map(items, item => {
        return (
          <li className="list-group-item" key={item.id}>
            {item.title}
            <button className="remove btn btn-danger" onClick={()=>this.onRemoveItem(item)}>Remove</button>
          </li>
        );
      })
    );
  }

  render() {
    const { items } = this.props;
    const transitionOptions = {
      transitionName: "fade",
      transitionEnterTimeout: 500,
      transitionLeaveTimeout: 500
    };    
    return (
      <div className="items-list-container">
        <h4>Items list</h4>
          {!items || _.size(items) < 1 ? <span>Please click the Add button to add items in here.</span> : ''}
          <ul className="list-group">
            <ReactCSSTransitionGroup {...transitionOptions}>
            {items && _.size(items) > 0 ? this.renderItems(items)  : ''}
            </ReactCSSTransitionGroup>
          </ul>

      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    items: _.map(state.items)
  };
}

export default connect(mapStateToProps, { removeItem })(ItemsList);