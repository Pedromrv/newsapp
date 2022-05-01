import React, { Component } from "react";
import { userContext } from '../../../../context/userContext';

class Form extends Component {
  static contextType = userContext;
  constructor(props) {
    super(props)

    this.state = {
      user: '',
      news: []
    }
  }

  addNews = (event) => {
    event.preventDefault()
    const { headline, abstract, source, article, author, articleUrl } = event.target
    const newNews = {
      headline: headline.value,
      abstract: abstract.value,
      source: source.value,
      article: article.value,
      author: author.value,
      articleUrl: articleUrl.value
    }
    this.context.addNews(newNews)
  }



  render() {
    return <div>
      <h3>Add the latest news to our app</h3>
      <userContext.Consumer>{() =>
          <form onSubmit={this.addNews}>
            <input type="text" name="headline" placeholder="headline" />
            <textarea type="text" name="abstract" placeholder="abstract" />
            <input type="text" name="source" placeholder="source" />
            <textarea type="text" name="article" placeholder="article" />
            <input type="text" name="author" placeholder="author" />
            <input type="text" name="articleUrl" placeholder="articleUrl" />
            <button type="submit">Añadir</button>
          </form>
      }
      </userContext.Consumer>
    </div>;
  }
}

export default Form;