import React, { Component,PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { deletePost, FetchPost } from '../actions';

class PostsShow extends Component {    
    static contextTypes = {
        router: PropTypes.object
    };

    componentWillMount() {        
        const id = this.props.params.id;
        console.log('[DEBUG-PostsShow] - id = ', id);
        this.props.FetchPost(id);
    }

    onDeletingPost(){
        const id = this.props.params.id;
        this.props.deletePost(id)
            .then(this.context.router.push('/'));
    }

    render() {
        const post = this.props.post;
        console.log('[DEBUG-PostsShow] - this.props.post=', post);
        if (!post){
            return <div>Loading ...</div>            
        }

        return (
            <div>
                <Link to="/">Back to Index</Link>
                <button className="btn btn-danger pull-right" 
                        onClick={this.onDeletingPost.bind(this)}>Delete Post</button>
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

export default connect(mapStateToProps, { deletePost, FetchPost })(PostsShow);