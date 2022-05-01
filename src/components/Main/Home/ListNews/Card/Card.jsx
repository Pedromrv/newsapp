import React, { Component, Link } from "react";


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
      <p>leer mas</p>
        <Link to={this.props.value.weburl}>Leer mas</Link>
      <p>{this.props.value.byline.original}</p>
      <p>ArticleUrl</p>
      <p></p>
    </article>;
  }
}

export default Card;