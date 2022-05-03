import React, {Component} from "react";
import {Route, Routes} from 'react-router-dom';
import ListNews from './Home/ListNews/ListNews';
import Form from './Home/Form/Form';
import Home from './Home';
import ErrorPage from './Home/Error/Error'


class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            news: []
        }
    }

    addNews(nieuwNieuws) {
        /* this.setState({news:[ ...this.state.news, nieuwNieuws ]}); */
        this.setState({news: [...this.state.news, nieuwNieuws]});

    }

    render() {
        return <div>
            <h2>Main</h2>

            <Routes>
                <Route element={<Home/>} path="/"/>
                <Route element={<Home/>} path="/home"/>
                <Route element={<ListNews news={this.state.news}/>} path="/list"/>
                <Route element={<Form add={(nieuwNieuws) => this.addNews(nieuwNieuws)}/>} path="/form"/>
                <Route path="*" element={<ErrorPage/>}/>
            </Routes>

        </div>;

    }
}

export default Main;