import React, {Component} from 'react';
import { Link } from 'react-router';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {    
    render() {
        const { handleSubmit } = this.props;
        return (
            <div className="posts-new container">
                <form onSubmit={handleSubmit(this.onSubmit)} className="post-new-form">
                    <Field name="title" label="title" type="text" component={this.renderInputField}/>
                    <Field name="categories" label="categories" type="text" component={this.renderInputField}/>
                    <Field name="contents" rows="10" cols="40" label="contents" type="textarea" component={this.renderTextAreaField}/>
                    <button type="submit" className="btn btn-primary">&nbsp;Save&nbsp;</button>
                    <Link type="button" to="/" className="btn btn-danger post-new-form-cancel-btn">
                        Cancel
                    </Link>
                </form>
            </div>
        );
    }

    renderInputField({ input, label, name, type }){
        return (
            <div className="form-group">
                <label className="control-label" htmlFor={name}>{label}</label>
                <input type={type} className="form-control" id={name} {...input} />
            </div>
        );    
    }

    renderTextAreaField({ input, rows, cols, label, name, type }){
        return (
            <div className="form-group">
                <label className="control-label" htmlFor={name}>{label}</label>
                <textarea rows={rows} cols={cols} className="form-control" id={name} {...input} />
            </div>
        );    
    }
    
    onSubmit(values){
        console.log('[DEBUG-PostsNew] - onSubmit is called. values=', values);
    }
}

export default reduxForm({
    form: 'createNewPost'
})(PostsNew);
