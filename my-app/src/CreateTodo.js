import React, { Component } from 'react';
import APIService from './APIservice'

class CreateTodo extends Component{
    constructor(props){
        super(props);
        this.state = {
            topic: "",
            title:"",
            content:"",
            createdCourseArticleInfo:undefined
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
        this.setState({[event.target.name]: event.target.value});
        console.log("State", this.state)
    }
    async createCourseArticle(event) {
       await APIService.addPost(this.state.topic,this.state.title,this.state.content)
    }
    render(){
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
        return(
            <div><br/><br/><br/>
                <form onSubmit={this.createCourseArticle}>
                <label>
                    <br/><br/>Title:
                    <input type="text" name="title" value={this.state.title} onChange={this.handleChange} />
                </label>
                <br/>
                <label>
                <br/><br/>Topic:
                    <input type="text" name="topic" value={this.state.topic} onChange={this.handleChange} />
                    {/* userId:
                    <select name="userId" value={this.state.userId} onChange={this.handleChange} >
                        <option value=''>Select UserId</option>
                        {optionItems}
                    </select> */}
                </label>
                <br/>
                <label>
                <br/><br/>Content:
                    <input type="text" name="content" value={this.state.content} onChange={this.handleChange}/>
                </label>
                <br/>
                <label>
                    <input type="submit" value="Submit" />
                </label>
                </form>
                <br/><br/><br/>
                {/* {result} */}
                <br/><br/>
                
            </div>
        );
    }
}

export default CreateTodo;
