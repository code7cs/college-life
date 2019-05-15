import React, { Component } from "react";
import Article from "./Article";
// import SearchBox from "./Query";

class ArticleList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: this.props.articles,
            searchText: ""
        };
    }

    handleInputChange = e => {
        this.setState({
            searchText: e.target.value
        });
    };

    render() {
        let articles = this.state.articles;
        if (!articles.length) {
            //no users
            return <p>No articles to display</p>;
        }
        let searchText = this.state.searchText;
        var articleItems = articles
            .filter(function(article) {
                return article.title.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
            })
            .map(function(article) {
                return <Article key={article.id} {...article} />;
            });

        return (
            <div className="article-list">
                <div className="searchBox">
                    <input
                        type="text"
                        placeholder="Search for articles..."
                        onChange={this.handleInputChange.bind(this)}
                    />
                </div>
                {articleItems}
            </div>
        );
    }
}

export default ArticleList;
