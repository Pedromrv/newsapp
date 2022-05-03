import React, { Component } from "react";
import { Link } from 'react-router-dom';


class Nav extends Component {
    render() {
        return <nav>
            <Link to='/home'>Home</Link>
            <Link to='/list'>Lista de noticias</Link>
            <Link to='/form'>Añadir noticia</Link>
        </nav>;
    }
}

export default Nav;
