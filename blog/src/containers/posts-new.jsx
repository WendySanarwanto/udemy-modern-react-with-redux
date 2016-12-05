import React, {Component} from 'react';

class PostsNew extends Component {
    render() {
        return (
            <div className="posts-new container">
                <form>
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
                    <button type="button" className="btn btn-danger" style={{marginLeft: '1em'}}>Cancel</button>
                </form>
            </div>
        );
    }
}

export default PostsNew;