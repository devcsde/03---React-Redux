import React, {Component} from 'react';
import {Link} from "react-router-dom";

export default class Header extends Component {
    render() {
        return (
            <div className="container devheader">
                <h2>devblog</h2>
                <hr/>
                <div className="text-xs-right">
                    <Link className="btn btn-secondary btn-sm" to="/posts/new">
                        Add a Post
                    </Link>
                </div>
            </div>
        );
    }
}