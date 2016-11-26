import React, {Component} from 'react';
import { reduxForm } from 'redux-form';

class PostsNew extends Component {
    render() {
        return (
            <form>
                <h3>Create A New Post</h3>
                <div className="form-group">
                    <label for="">Title</label>
                    <input type="text" className="form-control" />
                </div>

                <div className="form-group">
                    <label for="">Categories</label>
                    <input type="text" className="form-control" />
                </div>

                <div className="form-group">
                    <label for="">Contents</label>
                    <input type="text" className="form-control" />
                </div>
                
            </form>
        );
    }
}

export default reduxForm({
    form: 'PostsNewForm',
    fields: ['title', 'categories', 'content']
        
})(PostsNew);