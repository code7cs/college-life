import React,{ Component} from 'react';
import './About.css'

class About extends Component{
    render(){
        return (
            <div className='main'>
               
                <p>
                A forum for Stevens students to help them discuss some of the problems they might encounter. Students can post queries in categories regarding specific courses and other students can upvote/downvote the problem or post their own responses, similar to a StackOverflow post. Students can interact with one another in the comments section on each page. We also hope to expand this to include topics such as events, clubs, or on-campus activities.
                </p>

                <h1>Getting Started</h1>
                <p>
                <b>For using this applcation on your localhost , you will need two things:</b>
                <br/>
                <br/>
                <b>1.</b>NodeJS
                <br/>
                <b>2.</b>NPM
                </p>

                <h1>Prerequisites</h1>
                <p>
                <b>1.</b>Install NodeJs on your local machine with a version 8 or above.<br/>
                <b>2.</b>If a version below 8 is installed, install nvm to change the version.<br/>
                <b>3.</b>After installing NodeJS, install npm with version 5.6 or above
                </p>

                <h1>Installing</h1>
                <p>
                <b>After installing NodeJS and NPM,</b><br/><br/>
                <b>1.</b>After cloning or downloading, Extract the zip file to any folder.<br/>
                <b>2.</b>CD into the folder using the command prompt<br/>
                <b>3.</b>type npm install<br/>
                <b>4.</b>type npm start<br/>
                <b>5.</b>&nbspopen localhost and voila!
                </p>

                <h1>Deployment</h1>
                <p>
                    The project is deployed using GCP.<br/>
                    <b>Link:</b>  <a href="www.efficall.co:81">www.efficall.co:81</a>
                </p>
                <h1> Build With</h1>
                <p>
                <b>--</b>NodeJS<br/>
                <b>--</b>ExpressJS<br/>
                <b>--</b>Bootstrap<br/>
                <b>--</b>HTML<br/>
                <b>--</b>Handlebars<br/>
                <b>--</b>CSS<br/>
                <b>--</b>GIT<br/>
                <b>--</b>ReactJS<br/>
                <b>--</b>Jenkins<br/>
                <b>--</b>Redis<br/>
                <b>--</b>Firebase Authentication<br/>
                <b>--</b>Google Cloud Platform
                </p>

                <h1>Authors</h1>
                <p>
                Rohan Menon - <a href="https://github.com/rohanmenon96">rohanmenon96</a><br/>
                Jennifer Cafiero - <a href="https://github.com/jcafiero">jcafiero</a><br/>
                Hanfan Wang - <a href="https://github.com/hanfanw">Hanfanw</a><br/>
                Kajol Acharya - <a href="https://github.com/KajolAch">KajolAch</a><br/>
                Yiwei Xiang - <a href="https://github.com/ffffvvvvv">ffffvvvvv</a><br/>
                </p>

                <h1>License</h1>
                <p>
                    This project is licensed under the MIT License
                </p>
            </div>
        )

    }
}

export default About;

// add to css
// .about{
//     text-align:left;
//     padding-left:20%;
//     padding-right:30%;
//   }
//   .about p{
//     padding-left:10%;
//   }

//   .about b{
//     padding-right:10px;
//   }

