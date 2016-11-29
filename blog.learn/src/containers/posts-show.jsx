import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { FetchPost } from '../actions';

class PostsShow extends Component {    

    componentWillMount() {        
        const id = this.props.params.id;
        console.log('[DEBUG-PostsShow] - id = ', id);
        this.props.FetchPost(id);
    }
        
    render() {
        return (
            <div>
                <span>Show post {this.props.params.id}</span>
            </div>
        );
    }
}

export default connect(null, { FetchPost })(PostsShow);