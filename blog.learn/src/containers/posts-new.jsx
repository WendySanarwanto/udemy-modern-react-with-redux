import React, {Component, PropTypes} from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux'; 
import { reduxForm, Field } from 'redux-form';
import { createPost } from '../actions/create-post.action';
import Validator from 'Validator';

class PostsNew extends Component {
    /**
     * Create a reference to Router object through defining context property for this component
     */
    static contextTypes = {
        router: PropTypes.object
    };

    constructor(){
        super();
        this.renderInputText = this.renderInputText.bind(this);
        this.renderTextArea = this.renderTextArea.bind(this);
        this.state = { apiCallDelay: 50 };
    }

    renderInput(field, renderComponent){
        const error = field.meta.error;
        const isInvalid = field.meta.touched && field.meta.invalid;
        // console.log('[DEBUG-PostsNew] - In renderInput, field.meta=', field.meta);
        const containerStyle = `form-group ${ isInvalid ? 'has-error' : '' }`;

        return (
            <div className={containerStyle}>
                <label className="control-label">{field.label}</label>
                { renderComponent(field) }
                { isInvalid && <span className="help-block">{error}</span> } 
            </div>            
        );        
    }

    renderInputText(field){        
        return this.renderInput(field, (field)=>( <input className="form-control" {...field.input}/> ));
    }

    renderTextArea(field){
        return this.renderInput(field, (field)=>( 
            <textarea className="form-control" cols={field.cols} rows={field.rows} {...field.input}/> 
        ));        
    }

    onSubmit(e){
        // console.log('[DEBUG-PostsNew] - onSubmit, e=', e);
        // Upon successfull action, refer to the router object, exposed by context property, then call its push method with index route path as its argument.
        this.props.createPost(e)
            .then(()=>{
                setTimeout( this.context.router.push('/'), this.state.apiCallDelay );
            });
            //.then( setTimeout( this.context.router.push('/')), this.state.apiCallDelay );

    }
    
    render() {
        const { handleSubmit } = this.props;
        // console.log('[DEBUG-PostsNew] - render, this.props=', this.props);
        return (
            <form className="form-add-post" onSubmit = { handleSubmit(this.onSubmit.bind(this)) }>
                <h3>Create A New Post</h3>

                <Field name="title" type="text" component={ this.renderInputText } label="Title"/>
                <Field name="categories" type="text" component={ this.renderInputText } label="Categories"/>
                <Field name="content" type="text" cols="40" rows="10" component={ this.renderTextArea } label="Content"/>                

                <button className="btn btn-primary" type="submit">Submit</button>
                <Link to="/" className="btn btn-danger">Cancel</Link>
            </form>
        );
    }

    static validationRules = {
        title: 'required',
        categories: 'required',
        content: 'required'
    }

    static validate(values){        
        const result = Validator.make(values, PostsNew.validationRules);
        const errors = result.fails() ? result.getErrors() : {};
        // console.log('[DEBUG-PostsNew] - Leaving validate. errors=', errors);
        return errors;
    } 
}

export default connect(null, { createPost })(
    reduxForm({ 
        form: 'PostsNewForm',
        validate: PostsNew.validate
    })(PostsNew)
);