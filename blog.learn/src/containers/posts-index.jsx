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
                <div className="text-xs-right">
                    <Link to="/posts/new" className="btn btn-primary">
                        Add a Post
                    </Link>
                </div>
                {this.props.posts.all.map(post=>{
                    return (
                        <div key={post.id}>
                            <hr />
                            <div><span>Title:    </span>{post.title}</div>
                            <div><span>Category:   </span>{post.categories}</div>
                        </div>
                    );
                })}              
            </div>
        );
    }
}

const mapStateToProps = ( { posts } ) => {
    return { posts }
}

// const mapDispatchToProps = (dispatch, ownProps) => {
//     return bindActionCreators({FetchPosts}, dispatch)
// }

// export default connect(mapStateToProps, mapDispatchToProps)(PostsIndex);
export default connect(mapStateToProps, { FetchPosts })( PostsIndex );