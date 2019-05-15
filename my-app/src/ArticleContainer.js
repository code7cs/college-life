import React, { Component } from 'react';
import './ArticleFiles.css';
import ArticleList from './ArticleList';

import articles from './article_data';
import APIService from './APIservice'

class ArticleContainer extends Component {
  constructor() {
    super();
    this.state = {
      articles: []
    };
  }

  async componentDidMount() { 
    let articlesNew = await APIService.getArticles()
    this.setState({
      articles: articlesNew.courses
    });
    console.log("After Fetching: ", articlesNew.courses)
    console.log("State: ", this.state)
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