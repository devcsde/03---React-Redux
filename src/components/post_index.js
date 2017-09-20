import React from "react";
import { connect } from "react-redux";
import { fetchPosts} from "../actions/index";

class PostIndex extends React.Component {
    componentDidMount() {
        this.props.fetchPosts();
    }
    render() {
        console.log(this.props.posts);
        return(
        <div className="container">
           <h5> Post Index </h5>
        </div>    
        )
    }
}

function mapStateToProps(state){
    return {posts: state.posts };
}

export default connect(mapStateToProps, {fetchPosts})(PostIndex);