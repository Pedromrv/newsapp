import React, { Component } from "react";
import { Route, Routes } from 'react-router-dom';
import ListNews from './Home/ListNews/ListNews';
import Form from './Home/Form/Form';
import Home from './Home';



class Main extends Component {

  render() {
    return <div>
      <h2>Main</h2>

      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Home />} path="/home" />
        <Route element={<ListNews />} path="/list" />
        <Route element={<Form />} path="/form" />

      </Routes>

    </div>;

  }
}

export default Main;