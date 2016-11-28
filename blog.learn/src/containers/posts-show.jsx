import React, {Component} from 'react';
import { Link } from 'react-router';

class PostsShow extends Component {
    render() {
        return (
            <div>
                <span>Show post {this.props.params.id}</span>
            </div>
        );
    }
}

export default PostsShow;