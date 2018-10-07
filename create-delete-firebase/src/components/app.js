import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostItem from './post_item';

export default class App extends Component {
  state = { post: ''};

  onInputChange(e) {
    const value = e.target.value;
    // TODO: Call post new action creator by specified value
    // TODO: Upon successfull post, update state as empty
    // TODO: Implement this!
    this.setState({ post: e.target.value });
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
        <ul className="list-group col-md-4">
          <PostItem />
        </ul>
      </div>
    );
  }
}
