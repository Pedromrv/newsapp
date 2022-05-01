import React, { Component } from "react";
import { Link } from 'react-router-dom';


class Nav extends Component {
    render() {
        return <nav>
            <Link to='/home'>Home</Link>
            <Link to='/list'>News List</Link>
            <Link to='/form'>Add News</Link>
        </nav>;
    }
}

export default Nav;
