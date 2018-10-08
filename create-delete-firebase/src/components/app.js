import React, { Component } from 'react';
import { connect } from 'react-redux';

import PostItem from './post_item';
import { fetchDataList } from '../actions';

class App extends Component {
  state = { post: ''};

  componentDidMount(){
    // Call action creator which trigger dataList query (?)
    this.props.fetchDataList();
  }

  onInputChange(e) {
    const value = e.target.value;
    // TODO: Call post new action creator by specified value
    // TODO: Upon successfull post, update state as empty
    // TODO: Implement this!
    this.setState({ post: e.target.value });
  }

  renderDataList(){
    // Get access to data list from props
    const { dataList } = this.props;
    console.log(`[DEBUG] - <App.renderDataList> dataList: \n`, dataList);

    // TODO: Map back the data list as array and render each of their <li>s
  }

  render() {    
    return (
      <div className="container">
        <h4>Create a Post</h4>
        <form className="form-inline">
          <div className="form-group">
            <input className="form-control" placeholder="Add a post"
                  value={this.state.post}
                  onChange={this.onInputChange.bind(this)}
            />
            <button type="submit" className="btn btn-primary">Create Post</button>
          </div>
        </form>
        {/* <ul className="list-group col-md-4">
          {this.renderDataList.bind(this)}
        </ul> */}
      </div>
    );
  }
}

function mapStateToProps({dataList}) {
  console.log(`[DEBUG] - <mapStateToProps> dataList: \n`, dataList);
  return {
    dataList
  }
}

export default connect(mapStateToProps, {
  fetchDataList
})(App);
