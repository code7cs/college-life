import React, { Component } from 'react';
import './ArticleFiles.css';
import DataList from './DataList';
import APIService from './APIservice'
import articles from './data';

class QuackContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    };
  }

  async componentDidMount() { 
    console.log("Coming inside Quacks")
    let quacks = await APIService.getQuacks()
    this.setState({
      articles: quacks.courses
    });
    // console.log(this.state.articles)
  }
  render() {
    // console.log(this.state.articles);
    if (!this.state.articles.length) { //no users
      return <p>Loading. . . </p>;
  }
    let body = (
      <div className="container">
          <DataList articles={this.state.articles} />
      </div>
    );
    return body;
  }
}

export default QuackContainer;