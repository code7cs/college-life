import React from "react";
// import logo from './logo.svg';
import Navbar from "./Navbar";
import "./App.css";
import ArticleContainer from "./ArticleContainer";
import EventsContainer from "./EventsContainer";
import AddComment from "./AddComment";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";

// import Form from "./Form";
// import Query from "./Query.js";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            events: []
        };
    }
    async componentDidMount() {
        // const articles = await ApiService.getArticles({
        //     first_name: '',
        //     last_name: ''
        // });
        // this.setState({
        //     articles: articles
        // });
    }
    render() {
        return (
            // <Router>
            //     <Switch>
            //         <Route path="/">Home</Route>
            //         <Route path="/addcomment" component={AddComment} />
            //         <Route path="/article" component={ArticleContainer} />
            //         <Route path="/event" component={EventsContainer} />
            //     </Switch>
            // </Router>
            <div className="App">
                <Navbar />
                {/* <Form /> */}
                <ArticleContainer articles={this.state.articles} />
                <EventsContainer events={this.state.articles} />
            </div>
        );
    }
}

export default App;
