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
        //const posts = [ {id: '123', title: 'test', categories: 'general'}, { id: '345', title: 'test2', categories: 'general'} ];
        const noItemsInfo = `You have no any post items yet. Click Add Post to add your 1st post.`;
        return (
            <div className="posts-index">
                <div className="text-right"><button className="btn btn-primary">Add Post</button></div>
                <hr />
                <div>
                    {posts.length > 0 ? 
                        <ul className="list-group"> {posts.map(post => this.renderPostItem(post))}</ul> : 
                        <span className="alert alert-info">{noItemsInfo}</span> }
                                         
                </div>
            </div>
        )
    }

    renderPostItem(post){
        return (
            <li className="list-group-item" key={post.id}>
                <span>{post.title}</span>
                <span className="badge">{post.categories}</span>
            </li>
        )
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
