import React, {Component} from 'react';
import Article from './Article';

class ArticleList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      articles: this.props.articles
    }
  }
  render() {
  // console.log("proops", this.state)
  // console.log("Hello",this.state);
    const articles = this.props.articles;
    if (!articles.length) { //no users
        return <p>Loading . . .</p>;
    }
    return <div className="article-list">
            {
                articles.map((item, index) => {
                    return <Article key={index} {...item} />;
                })
            }
    </div>;
  }
}

export default ArticleList;