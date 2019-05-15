import React,{ Component } from "react";
import firebase from './data/firebaseConfig'
import {Redirect} from 'react-router-dom'
class SignUp extends Component{

    constructor(props){
        super(props);
        this.state = {
            email : "",
            password: "",
            error: "",
            redirect: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = async event=>{
        event.preventDefault();
        try{
            let registerUser = await firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password);
            console.log("Firebase returned: ", registerUser.user.uid)
            this.setState({redirect: true})    
        }catch(e){
            console.log(e.message)
            this.setState({error: e.message})
        }
        // if(this.state.password !== this.state.repeatpassword){
        //     console.log("Password don't match, please re-enter password");
        // }else{
        //     try{
        //         // Problem 3
                // let registerUser = await firebase.auth().createUserWithEmailAndPassword(email, password);
        //     }catch(e){
        //         console.log("error",e);
        //     }
        // }
        console.log("Come in handleSubmit: ")

    };

    

    handleChange = async event=>{
        console.log("Change", event.target.value)
        this.setState({
            [event.target.name] : event.target.value
        })
        console.log("State", this.state)
    };

    render() {
        //Problem 1 className
        if(this.state.redirect)
        {
            return <Redirect to='/articles' />
        }
        let error = "";
        if(this.state.error){
            error = <div className="alert alert-danger"><p>{this.state.error}</p></div>
        }
        else{
            error = <div></div>
        }
        return(
        <div className = "container">
         <form onSubmit={this.handleSubmit}>
            <br/><label> Email : </label><input type="text" value={this.state.email} name="email" onChange={this.handleChange}/>
            <br/><label> Password : </label><input type="password" value={this.state.password} name="password" onChange={this.handleChange}/>
            <br/><input className="btn btn-primary" type="submit" value="Sign Up"/>
         </form>
         {error}
        </div>
        )
    
    }

}
export default SignUp;