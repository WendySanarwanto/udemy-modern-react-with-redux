import React, {Component} from 'react';
import { connect } from 'react-redux'; 
import { bindActionCreators } from 'redux';
import { reduxForm, Field } from 'redux-form';
import { createPost } from '../actions/create-post.action';

class PostsNew extends Component {
    onSubmit(e){
        console.log('[DEBUG-PostsNew] - onSubmit, e=', e);
        this.props.createPost(e);
    }

    render() {
        // Create references to form's setting properties created by redux-form
        const { handleSubmit } = this.props;
        console.log('[DEBUG-PostsNew] - this.props=', this.props);
        return (
            <form onSubmit = { handleSubmit(this.onSubmit.bind(this)) }>
                <h3>Create A New Post</h3>

                <div className="form-group">
                    <label>Title</label>
                    <Field name="title" component="input" type="text" className="form-control"/> 
                </div>

                <div className="form-group">
                    <label>Categories</label>
                    <Field name="categories" component="input" type="text" className="form-control"/> 
                </div>

                <div className="form-group">
                    <label>Content</label>
                    <Field name="content" component="input" type="text" className="form-control"/> 
                </div>

                <button className="btn btn-primary" type="submit">Submit</button>
            </form>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators( { createPost }, dispatch);
}

const postNewReduxForm = reduxForm({ form: 'PostsNewForm'})(PostsNew);
export default connect(null, mapDispatchToProps)(postNewReduxForm);