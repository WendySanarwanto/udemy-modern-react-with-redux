import React, {Component} from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPosts } from '../actions';

class PostsIndex extends Component {
    componentWillMount(){
        this.props.fetchPosts();
    }

    render () {
        const posts = this.props.posts;
        return (
            <div className="posts-index">
                <div className="text-right"><button className="btn btn-primary">Add Post</button></div>
                <hr />
                { posts.length > 0 ? posts.map( post => this.renderPostItem(post)) :
                                     <span className="alert alert-info">'You have no any post items yet. Click Add Post to add your 1st post.'</span> }
            </div>
        )
    }

    renderPostItem(post){
        <li className="lsit-group-item">
            <span>{post.title}</span>
            <span className="badge">{post.categories}</span>
        </li>
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators({ fetchPosts }, dispatch);
}

const mapStateToProps = (state, ownProps) => {
    return {
        posts: state.posts.all
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsIndex);
