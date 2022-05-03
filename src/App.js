import "./App.css";
import {useState} from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import { BrowserRouter } from 'react-router-dom';
import Footer from "./components/Footer";
import {userContext} from "./context/userContext";

function App() {

    const [user, setUser] = useState("");
    const [news, setNews] = useState([]);

    const login = (user) => {
        setUser(user)
    }

    const logout = () => {
        setUser("")
    }

    const addMyNews = (nieuwNieuws) => {
        console.log("saved news", news.length);
        console.log("news to save", nieuwNieuws);
        setNews([ ...news, nieuwNieuws ]);
        console.log(news.length)

    }

    const data = {
        login,
        logout,
        user,
        addMyNews
    }

    return (
        <div className="App">
            <BrowserRouter >
                <userContext.Provider value={data}>
                    <Header />
                    <Main />
                </userContext.Provider>
            </BrowserRouter>
            <Footer />
        </div>
    );
}

export default App;