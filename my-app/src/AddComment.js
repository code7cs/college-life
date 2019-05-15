import React, {Component} from 'react'
import APIService from './APIservice'

class AddComment extends Component {
    constructor(props){
        super()
        this.state = {
           id: 0,
           title: "",
           description: "",
           comment:"",
           comments: []
        }
        this.onChange = this.onChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    async componentDidMount(){
        console.log("Params: ",this.props.match.params.id)
        let data = await APIService.getPostInformation(this.props.match.params.id)
        console.log("Data : ", data)
        this.setState({
            id: this.props.match.params.id,
            title: data.courses.title,
            description: data.courses.content,
            comments: data.courses.comments
        })
    }

    async onChange(e)
        {
            console.log("Coming inside onChange")
            this.setState({
                [e.target.name]: e.target.value
            })
            console.log("State: ", this.state)
        }

    async handleSubmit(e)
        {
            e.preventDefault();
            await APIService.addComment(this.state.id, this.state.comment)
            let data = await APIService.getPostInformation(this.props.match.params.id)
            this.setState({
                comments: data.courses.comments
            })
        }

    render(){

        let comments= [];
        for(let i in this.state.comments){
            comments.push(<div><p>{this.state.comments[i]}</p></div>)
        }

        return(<div>
            Title: {this.state.title}
            <br/><br/>
            Description: {this.state.description}
            <br/><br/> <br/><br/>
            Add Comment : 
            <form onSubmit={this.handleSubmit}>
                <textarea rows="5" cols="100" name="comment" onChange={this.onChange} value={this.state.comment}/>
                <br/><br/>
                <input type="submit" value="submit" />
            </form>
            <br/>
            Comments by Other Users: <br/><br/><br/>
            {comments}
        </div>)
    }
}

export default AddComment