import React, { Component } from 'react';
import './ArticleFiles.css';
import ArticleList from './ArticleList';

import articles from './article_data';

class ArticleContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: articles
    };
  }

  async componentDidMount() { 
    this.setState({
      articles: articles
    });
    // console.log(this.state.articles)
  }
  render() {
    // console.log(this.state.articles);
    let body = (
      <div className="container">
          <ArticleList articles={this.state.articles} />
      </div>
    );
    return body;
  }
}

export default ArticleContainer;