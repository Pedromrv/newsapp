import React, {Component} from "react";


class Card extends Component {
    constructor(props) {
        super(props)

        this.state = {
            first: ""
        }
    }

    render() {
        return <article>

            <h2>{this.props.value.headline.main}</h2>
            <p>{this.props.value.abstract}</p>
            <p>{this.props.value.lead_paragraph}...</p>
            <p><a href={this.props.value.web_url}>Leer mas</a></p>
            <p>{this.props.value.byline.original}</p>
            <img src={`https://static01.nyt.com/${this.props.value.multimedia[0].url}`} alt=""/>
            <p></p>
        </article>;
    }
}

export default Card;