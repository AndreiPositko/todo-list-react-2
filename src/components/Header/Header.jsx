import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <div>
                <Link to="/">Home</Link> |
                <Link to="/posts">Posts</Link> |
                <Link to="/photos">Photos</Link>
            </div>
        )
    }
}
