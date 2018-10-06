import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createPost } from '../actions';

class PostsNew extends Component {

  onSubmit(values) {
    console.log(`[DEBUG] - <PostsNew.onSubmit> values:\n`, values);
    // Pass values to submit new post action creator
    this.props.createPost(values, () => {
      // Navigate back to `/` once the post has been created
      this.props.history.push(`/`);
    });
  }

  renderField(field) {
    const { meta: { touched, error } }  = field;
    const className = `form-group ${touched && error ? 'has-danger' : '' }`;
    
    return (      
      <div className={className}>
        <label>{field.label}</label>
        <input 
          className="form-control"
          type="text"
          {...field.input}/>
        <div className="text-help">
          { field.meta.touched ? field.meta.error : ''}
        </div>
      </div>
    );
  }

  render() {
    const handleSubmit = this.props.handleSubmit;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field name="title" label="Title For Post" component = {this.renderField} />
        <Field name="categories" label="Categories" component = {this.renderField} />
        <Field name="content" label="Post Content" component = {this.renderField} />
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link className="btn btn-danger" to="/">Cancel</Link>
      </form>
    );
  }
}

function validate(values) {
  // values -> { title: '', categories: '', content: ''}
  const errors = {};
  // console.log(`[DEBUG] - <components/posts_new.validate> values: \n`, values);
  // console.log(`[DEBUG] - <components/posts_new.validate> values.title: \n`, values.title);

  // TODO: Validate the inputs from 'values'
  if (!values.title) {
    errors.title = "Enter a title!";
  }

  if (values.title && values.title.length < 3) {
    errors.title = "Title must be at least 3 characters"
  }

  if (!values.categories) {
    errors.categories = "Enter some categories";
  }

  if (!values.content) {
    errors.content = "Enter some content please";
  }
  // If errors is empty, the form is fine to submit
  // If errors has *any* properties, redux form assumes form is invalid
  return errors;
}

export default reduxForm({
  validate,
  form: 'PostsNewForm'
}) ( connect(null, { createPost })(PostsNew));
