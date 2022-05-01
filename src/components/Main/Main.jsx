import React, { Component } from "react";
import { Route, Routes } from 'react-router-dom';
// import AddNewsFrom from './AddNewsForm/AddNewsForm';
import Home from './Home';
// import NewsList from './NewsList';



class Main extends Component {

  render() {
    return <div>
      <h2>Main</h2>

      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Home />} path="/home" />
        {/*<Route element={<AddNewsFrom />} path="/form" />*/}
        {/*<Route element={<NewsList />} path="/list" />*/}

      </Routes>

    </div>;

  }
}

export default Main;