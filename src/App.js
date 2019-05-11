import React, { Component } from "react";
import "./App.css";
import Clubs from "./components/Clubs";

class App extends Component {
    state = {
        clubs: [
            {
                id: 1,
                title: "Audio Engineering Club",
                src:
                    "https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/58542953_2236113763169591_5616850649367969792_o.jpg?_nc_cat=100&_nc_ht=scontent-lga3-1.xx&oh=fe82b9a4c7b9261dd2777f7faf4e1f11&oe=5D656581",
                description:
                    "We are a group of individuals who are passionate about audio engineering. Whether you are an aspiring engineer, musician, or someone who just loves music, there is something for you.  The club's purpose is to give Stevens students an opportunity to gain hands on experience as audio engineers."
            },
            {
                id: 2,
                title: "Poetry Club",
                src:
                    "https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/14915344_314631988919184_3195565064411043457_n.png?_nc_cat=108&_nc_ht=scontent-lga3-1.xx&oh=084c6eb40e46320b0f9a311fea464bf4&oe=5D2ADE7F",
                description:
                    "Poetry Club is dedicated to providing a creative outlet for students and fostering an appreciation for poetry and the arts. We read, write and perform poetry as well as make zines, collaborative mini-books of poetry, art, and photography."
            },
            {
                id: 3,
                title: "Stevens Dramatic Society",
                src:
                    "https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/51153442_2714252278592524_389102124094455808_o.jpg?_nc_cat=102&_nc_ht=scontent-lga3-1.xx&oh=4da680d7e6b6687301b0ab8e8787b042&oe=5D2934B2",
                description:
                    "The Stevens Dramatic Society (SDS) is a student-run theatrical organization founded in 1910 at Stevens Institute of Technology. In recent years, SDS has produced a dramatic play in the fall semester and a musical production during the spring semester."
            }
            // {
            //     id: 4,
            //     title: "Ethnic Student Council",
            //     src: "",
            //     description:
            //         "ESC is an umbrella organization comprised of various ethnic groups that are devoted to the promotion and celebration of cultural diversity among the student body. Through our events, we foster teamwork and friendship while spreading cultural awareness. This is reflected in our annual Unity Show where our organizations give it their all to produce amazing performances representative of their cultures. "
            // }
        ]
    };
    constructor() {
        super();
        console.log("App-Construtor");
    }

    render() {
        return (
            <div>
                <main className="container">
                    <Clubs clubs={this.state.clubs} />
                </main>
            </div>
        );
    }
}

export default App;