import React, {Component} from 'react';
import { Link } from 'react-router';
import { Field, reduxForm } from 'redux-form';
import Validator from 'Validator';

class PostsNew extends Component {    
    render() {
        const { handleSubmit } = this.props;
        return (
            <div className="posts-new container">
                <form onSubmit={handleSubmit(this.onSubmit)} className="post-new-form">
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
        console.log('[DEBUG-PostsNew] - onSubmit is called. values=', values);
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

export default reduxForm({
    form: 'createNewPost',
    validate: PostsNew.validate
})(PostsNew);
