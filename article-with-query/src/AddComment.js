import React, { Component } from "react";
//import ApiService from "../ApiService";
import { Link } from "react-router-dom";

class AddComment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            topic: "",
            title: "",
            content: "",
            createdCourseArticleInfo: undefined
            // userList: [],
            // createdTodo: undefined
        };
        this.handleChange = this.handleChange.bind(this);
        //this.createTodoSubmit = this.createTodoSubmit.bind(this);
        this.createCourseArticle = this.createCourseArticle.bind(this);
    }
    // remove user list
    async componentDidMount() {
        try {
            // const users = await ApiService.getUsers();
            // this.setState({userList: users});
        } catch (e) {
            console.error(`An error ${e.message} occured while loading users`);
        }
    }
    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }
    async createCourseArticle(event) {
        event.preventDefault();
        try {
            let coursearticleinfo = {
                topic: this.state.topic,
                title: this.state.title,
                content: this.state.content
            };
            //let coursearticle = await api; ================================>
            //let todo = await ApiService.createTodo(todoInfo);
            //console.log(`Todocreate ${JSON.stringify(todo.createTodo)}`);
            //this.setState({createdCourseArticleInfo: JSON.stringify(coursearticle.createdCourseArticleInfo)});
        } catch (e) {
            console.error(`An error ${e.message} occured while create todo`);
        }
    }
    render() {
        // let optionItems = this.state.userList.map((userList,index) =>
        //         <option key={index+1}>{userList.id}</option>
        // );
        // let result = null;
        // if (this.state.createdCourseAtricleInfo) {
        //     result =
        //     <div>
        //         <p>New Course Atricle has been added!</p>
        //         <p>{this.state.createdCourseArticleInfo}</p>
        //     </div>
        // }
        return (
            <div>
                <br />
                <br />
                <br />
                <form onSubmit={this.createCourseArticle}>
                    <label>
                        Title:
                        <input type="text" name="title" value={this.state.title} onChange={this.handleChange} />
                    </label>
                    <br />
                    <label>
                        Topic:
                        <input type="text" name="topic" value={this.state.topic} onChange={this.handleChange} />
                        {/* userId:
                    <select name="userId" value={this.state.userId} onChange={this.handleChange} >
                        <option value=''>Select UserId</option>
                        {optionItems}
                    </select> */}
                    </label>
                    <br />
                    <label>
                        Content:
                        <input type="text" name="content" value={this.state.content} onChange={this.handleChange} />
                    </label>
                    <br />
                    <label>
                        <input type="submit" value="Submit" />
                    </label>
                </form>
                <br />
                <br />
                <br />
                {/* {result} */}
                <br />
                <br />
                <Link className="todo__linkback" to="/">
                    Back to the Homepage
                </Link>
            </div>
        );
    }
}

export default AddComment;
