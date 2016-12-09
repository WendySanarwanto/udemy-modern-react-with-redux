import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Field, reduxForm } from 'redux-form';
import Validator from 'Validator';
import { createPost } from '../actions';

class PostsNew extends Component {
    /**
     * Get reference to router object
     */
    static contextTypes = {
        router: PropTypes.object
    };

    render() {
        const { handleSubmit } = this.props;
        return (
            <div className="posts-new container">
                <form onSubmit={ handleSubmit(this.onSubmit.bind(this)) } className="post-new-form">
                    <Field name="title" label="title" type="text" component={this.renderInputField}/>
                    <Field name="categories" label="categories" type="text" component={this.renderInputField}/>
                    <Field name="content" rows="10" cols="40" label="content" type="textarea" component={this.renderTextAreaField}/>
                    <button type="submit" className="btn btn-primary">&nbsp;Save&nbsp;</button>
                    <Link type="button" to="/" className="btn btn-danger post-new-form-cancel-btn">
                        Cancel
                    </Link>
                </form>
            </div>
        );
    }

    renderInputField({ input, label, name, type, meta: { error, invalid, touched } }){
        return (
            <div className={ `form-group has-feedback ${touched && invalid ? 'has-error' : ''}`}>
                <label className="control-label" htmlFor={name}>{label}</label>
                <input type={type} className="form-control" id={name} {...input} />
                { touched && invalid && <span className="help-block">{error}</span>}
            </div>
        );    
    }

    renderTextAreaField({ input, rows, cols, label, name, type, meta: { error, invalid, touched } }){
        return (
            <div className={ `form-group has-feedback ${touched && invalid ? 'has-error' : ''}`}>
                <label className="control-label" htmlFor={name}>{label}</label>
                <textarea rows={rows} cols={cols} className="form-control" id={name} {...input} />
                { touched && invalid && <span className="help-block">{error}</span>}
            </div>
        );    
    }
    
    onSubmit(values){
        this.props.createPost(values)
            .then(()=>{
                // Add small amount of delay before redirecting back to index,
                // to give time for the backend creating the new post and returning a list of posts with the created new post.
                setTimeout( this.context.router.push('/'), 50);
            });        
    }

    /**
     * A set of rules, to be used for validating values of each form input fields
     */
    static validationRules = {
        title: 'required',
        categories: 'required',
        content: 'required'
    }; 

    /**
     * Validate form's entered values through calling Validator's make method with specified validation rules.
     */
    static validate(values){
        const result = Validator.make(values, PostsNew.validationRules);
        const errors = result.fails() ? result.getErrors() : {};

        console.log('[DEBUG-PostsNew] - validateFields is called. errors: ', errors);

        return errors;
    }
}

const form = reduxForm({
    form: 'createNewPost',
    validate: PostsNew.validate
})(PostsNew)    
 
export default connect(null, { createPost })(form);
