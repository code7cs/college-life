import React, {Component} from 'react';
import QuackCentre from './QuackCentre';

class DataList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      articles: this.props.articles
    }
  }
  render() {
  // console.log("proops", this.state)
  // console.log("Hello",this.state);
    const articles = this.state.articles;
    if (!articles.length) { //no users
        return <p>No articles to display</p>;
    }
    return <div className="article-list">
            {
                articles.map((item, index) => {
                    return <QuackCentre key={index} {...item} />;
                })
            }
    </div>;
  }
}

export default DataList;