import React, {Component} from 'react';
// 1. Import Link component from react-router. Link is a component that behave like anchor link. 
//    But, it is supposed to handle redirection to defined route path.
import { Link } from 'react-router';
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { FetchPosts } from '../actions';

class PostsIndex extends Component {

    componentWillMount(){
        console.log('[DEBUG-PostIndex] - componentWillMount is called. Should call fetchPosts action creator in here.');
        this.props.FetchPosts();
    }

    render() {
        return (
            <div>
                <div className="text-right">
                    <Link to="/posts/new" className="btn btn-primary">
                        Add a Post
                    </Link>
                </div>
                <h3>Posts</h3>
                <ul className="list-group">                    
                    {this.props.posts.map(post=>{
                        return (
                            <Link className="posts-list-item list-group-item" to={`/posts/${post.id}`} key={post.id}>
                                <strong>{post.title}</strong><span className="badge">{post.categories}</span>
                            </Link>
                        );
                    })}
                </ul>                
            </div>
        );
    }
}

const mapStateToProps = ( state ) => {
    return { posts: state.posts.all }
}

// const mapDispatchToProps = (dispatch, ownProps) => {
//     return bindActionCreators({FetchPosts}, dispatch)
// }

// export default connect(mapStateToProps, mapDispatchToProps)(PostsIndex);
export default connect(mapStateToProps, { FetchPosts })( PostsIndex );