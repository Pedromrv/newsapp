import React, {Component} from "react";

class Form extends Component {

    constructor(props) {
        super(props)

        this.state = {
            user: '',
            news: []
        }
        this.addMyNews = this.addMyNews.bind(this)

    }

    addMyNews(event) {
        event.preventDefault()
        const {headline, abstract, first_paragraph, author, articleUrl} = event.target
        const nieuwNieuws = {
            headline: headline.value,
            abstract: abstract.value,
            first_paragraph: first_paragraph.value,
            author: author.value,
            articleUrl: articleUrl.value
        }

        this.props.add(nieuwNieuws)

        event.target.reset();
    }


    render() {
        return <div>
            <h3>Añade una noticia a la página</h3>
            <form onSubmit={this.addMyNews}>
                <input className="my-news__input" type="text" name="headline" placeholder="Título"/>
                <textarea className="my-news__textarea" type="text" name="abstract" placeholder="Encabezado"/>
                <input className="my-news__input" type="text" name="first_paragraph" placeholder="Fuente"/>
                <input className="my-news__input" type="text" name="author" placeholder="Autor"/>
                <input className="my-news__input" type="text" name="articleUrl" placeholder="URL del Artículo"/>
                <button className="my-news__submit" type="submit">Añadir</button>
            </form>
        </div>;
    }
}

export default Form;


// addNews = (event) => {
//     event.preventDefault()
//     const {headline, abstract, source, article, author, articleUrl} = event.target
//     const nieuwNieuws = {
//         headline: headline.value,
//         abstract: abstract.value,
//         source: source.value,
//         article: article.value,
//         author: author.value,
//         articleUrl: articleUrl.value
//     }
//     this.context.addNews(nieuwNieuws)
// }