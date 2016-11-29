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
        const post = this.props.post;
        console.log('[DEBUG-PostsShow] - this.props.post=', post);
        if (!post){
            return <div>Loading ...</div>            
        }

        return (
            <div>
                <h3>{post.title}</h3>
                <h6>Categories: {post.categories}</h6>
                <p>{post.content}</p>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        post: state.posts.post
    }
}

export default connect(mapStateToProps, { FetchPost })(PostsShow);