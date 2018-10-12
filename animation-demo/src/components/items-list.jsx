import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { removeItem } from '../actions';
import './items-list.css';

class ItemsList extends Component {
  onRemoveItem(item){
    // console.log(`[DEBUG] - <ItemsList.onRemoveIte> item: \n`, item);
    // console.log(`[DEBUG] - <ItemsList.onRemoveIte> this: \n`, this.props);
    this.props.removeItem(item);
  }

  render() {
    const { items } = this.props;
    // console.log(`[DEBUG] - <ItemsList.render> items: \n`, items);

    return (
      <div className="items-list-container">
        <h4>Items list</h4>
        { items && items.length > 0 ?
            <ul className="list-group">
              {
                _.map(items, item => {
                  return (
                    <li className="list-group-item" key={item.id}>
                      {item.title}
                      <button className="remove btn btn-danger" onClick={()=>this.onRemoveItem(item)}>Remove</button>
                    </li>
                  );
                })
              }
            </ul> : 
            <span>Please click the Add button to add items in here.</span>
        }
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