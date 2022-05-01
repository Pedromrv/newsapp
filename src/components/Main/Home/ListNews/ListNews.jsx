import React, { Component } from "react";
import NewsCard from './Card/Card'
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';

const NYT_API_KEY = process.env.REACT_NYT_API_KEY


class ListNews extends Component {
    constructor(props) {
        super(props)

        this.state = {
            user: '',
            news: []
        }
    }

    async componentDidMount() {
        try {
            const apiNewsQuery = await axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=${NYT_API_KEY}`);
            const fiveNewsPreload = apiNewsQuery.data.response.docs.slice(0, 5);
            this.setState({ news: fiveNewsPreload })
            console.log(fiveNewsPreload)
        } catch (err) {
            console.log(err)
        }
    }


    render() {
        return <div>
            <h1>Our news</h1>
            <section>
                {this.state.news.map(news => <NewsCard value={news} key={uuidv4()} />)}
            </section>

        </div>;
    }
}

export default ListNews;