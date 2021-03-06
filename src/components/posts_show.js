import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {fetchPost, deletePost} from "../actions/index";

class PostsShow extends React.Component {
    componentDidMount() {
        if(!this.props.post) {
            const {id} = this.props.match.params;
            this.props.fetchPost(id);
        }
    }

    onDeleteClick(){
        const {id} = this.props.match.params;
        this.props.deletePost(id, () => {
            this.props.history.push("/");
        });
    }

    render(){
        const {post} = this.props;

        if(!post){
            return <div className="container">Loading ...</div>;
        }

        return (
            <div className="container">
                <h3>{post.title}</h3>
                <h6>Categories: {post.categories}</h6>
                <p>{post.content}</p>
                <Link className="btn btn-secondary" to="/">Back</Link>
                <button
                    className="btn btn-danger pull-right"
                    onClick={this.onDeleteClick.bind(this)}
                >Delete</button>
            </div>
        );
    }
}

function mapStateToProps({posts}, ownProps) {
    return {post: posts[ownProps.match.params.id]};
}

export default connect(mapStateToProps, {fetchPost, deletePost})(PostsShow);