import React, {Component} from 'react';
import {Link} from "react-router-dom";

export default class Header extends Component {
    render() {
        return (
            <div className="row container devheader">
                <div className="col-md-6">
                    <h2>devblog</h2>
                    <hr/>
                </div>
                <div className="col-md-6 text-xs-right">
                    <Link className="btn btn-secondary btn-sm" to="/posts/new">
                        Add a Post
                    </Link>
                    <hr/>
                </div>
            </div>
        );
    }
}