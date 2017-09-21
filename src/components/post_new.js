import * as React from "react";
import {Field, reduxForm} from "redux-form";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {createPost} from "../actions";


class PostsNew extends React.Component {
    renderField(field) {  // field comes as object from redux-form
        const {meta: {touched, error}} = field; // field.meta.touched destructuring
        const className = `form-group ${touched && error ? "has-danger" : ""}`;
        return (
            <div className={className}>
                <label>{field.label}</label>
                <input
                    className="form-control"
                    type="text"
                    {...field.input}
                />
                <p className="text-help">{touched ? error : ""}</p>
            </div>
        )
    }

    onSubmit(values){
        this.props.createPost(values, () => {
            this.props.history.push('/');
        });
    }

    render() {
        const { handleSubmit } = this.props; // handleSubmit prop comes from redux-form

        return (
            <div className="container">
                <form className="form" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <Field
                        label="Title"
                        name="title"
                        component={this.renderField}
                    />
                    <Field
                        label="Category"
                        name="categories"
                        component={this.renderField}
                    />
                    <Field
                        label="Content"
                        name="content"
                        component={(field) => {
                            const {meta: {touched, error}} = field; // field.meta.touched destructuring
                            const className = `form-group ${touched && error ? "has-danger" : ""}`;
                            return (
                                <div className={className}>
                                    <label>{field.label}</label>
                                    <textarea
                                        className="form-control"
                                        type="text"
                                        {...field.input}
                                    />
                                    <p className="text-help">{touched ? error : ""}</p>
                                </div>
                            )
                        }}
                    />
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <Link to="/" className="btn btn-secondary">Cancel</Link>
                </form>
            </div>
        )
    }
}

function validate(values){
    const errors = {};

    if(!values.title || values.title.length < 3){
        errors.title = "Enter a title that has at least 3 characters!"
    }
    if (!values.categories){
        errors.categories = "Enter a category, or categories!"
    }
    if (!values.content) {
        errors.content = "Enter some content!"
    }

    return errors;
}

export default reduxForm({
    validate,
    form: "PostsNewForm"
})(
    connect(null,{createPost})(PostsNew)
);