import React, {Component} from "react";
import Card from './Card/Card'
import axios from "axios";
import {v4 as uuidv4} from 'uuid';

const API_KEY = process.env.REACT_APP_NY_KEY;


class ListNews extends Component {
    constructor(props) {
        super(props)

        this.state = {
            user: '',
            load: [],
            news: this.props.news
        }
    }

    async componentDidMount() {
        try {
            const apiNewsQuery = await axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=Sports&api-key=${API_KEY}`);
            const fiveNewsPreload = apiNewsQuery.data.response.docs.slice(0, 5);
            this.props.news === []
                ?this.setState({ load: fiveNewsPreload})
                :this.setState({load: this.state.news.concat(fiveNewsPreload)})

        } catch (err) {
            console.log(err)
        }
    }


    render() {
        return <div>
            <h1>Noticias</h1>
            <section>
                {this.state.load.map(news => <Card value={news} key={uuidv4()}/>)}
            </section>

        </div>;
    }
}

export default ListNews;