import React from "react";
import {Field, reduxForm} from "redux-form";

// import {connect} from "react-redux";

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
        console.log(values);
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
    form: "PostNewForm"
})(PostsNew);

