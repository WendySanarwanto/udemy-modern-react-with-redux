import React, {Component} from 'react';
import { Link } from 'react-router';

class PostsNew extends Component {
    render() {
        return (
            <div className="posts-new container">
                <form className="post-new-form">
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input type="text" className="form-control" id="title" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="categories">Categories</label>
                        <input type="text" className="form-control" id="categories" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="contents">Contents</label>
                        <textarea rows="10" cols="40" className="form-control" id="contents" />
                    </div>
                    <button type="submit" className="btn btn-primary">&nbsp;Save&nbsp;</button>
                    <Link type="button" to="/" className="btn btn-danger post-new-form-cancel-btn">
                        Cancel
                    </Link>
                </form>
            </div>
        );
    }
}

export default PostsNew;