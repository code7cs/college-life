const mongoFunctions = require( './data/mongoFunctions');

class ApiService {

    /**
     * define base url and field schemas here
     * @returns {ApiService}
     */
    constructor() {
        this.apiUrl = 'http://localhost:3005/';
    }

    /**
     * Generic function to fetch data from server
     * @param {string} query
     * @returns {unresolved}
     */
    async getGraphQlData(resource, params, fields) {
        const query = `{${resource} ${this.paramsToString(params)} ${fields}}`
        const res = await fetch(this.apiUrl, {
            method: 'POST',
            mode: 'cors',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }),
            body: JSON.stringify({query}),
        });
        if (res.ok) {
            const body = await res.json();
            return body.data;
        } else {
            throw new Error(res.status);
        }
    }

    async execute(query) {
        const res = await fetch(this.apiUrl, {
            method: 'POST',
            mode: 'cors',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }),
            body: JSON.stringify({query}),
        });
        if (res.ok) {
            const body = await res.json();
            return body.data;
        } else {
            throw new Error(res.status);
        }
    }


    /**
     * 
     * @param {object} params
     * @returns {array} users list or empty list
     */
    async getUsers(params = {}) {
        const data = await this.getGraphQlData('users', params, this.userFields);
        //return users list
        return data.users;
    }

    

    

    /**
     * 
     * @param {object} params
     * @returns {array} users list or empty list
     */
    async getTodos(params = {}) {
        const data = await this.getGraphQlData('todos', params, this.todoFields);
        //return todos list
        return data.todos;
    }

    async deleteTodo(id){
        var query = `mutation{deleteToDo(id:"${id}"){title}}`
        await this.execute(query);
    }

    async getCourses(){
        console.log("Coming inside getCourses")
        const res = await fetch(this.apiUrl, {
            method: 'GET',
            mode: 'cors',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            })
        });
        if (res.ok) {
            const body = await res.json();
            console.log("Body: ", body)
            return body;
        } else {
            throw new Error(res.status);
        }
    }

    async getEvents(){
        console.log("Coming inside getCourses")
        const res = await fetch('http://localhost:3005/getEvents', {
            method: 'GET',
            mode: 'cors',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            })
        });
        if (res.ok) {
            const body = await res.json();
            console.log("Body: ", body)
            return body;
        } else {
            throw new Error(res.status);
        }
    }

    async getQuacks(){
        console.log("Coming inside getQuacks")
        const res = await fetch('http://localhost:3005/getQuacks', {
            method: 'GET',
            mode: 'cors',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            })
        });
        if (res.ok) {
            const body = await res.json();
            console.log("Body: ", body)
            return body;
        } else {
            throw new Error(res.status);
        }
    }

    async getClubs(){
        console.log("Coming inside getClubs")
        const res = await fetch('http://localhost:3005/getClubs', {
            method: 'GET',
            mode: 'cors',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            })
        });
        if (res.ok) {
            const body = await res.json();
            console.log("Body: ", body)
            return body;
        } else {
            throw new Error(res.status);
        }
    }

    async getArticles(){
        console.log("Coming inside getArticles")
        const res = await fetch('http://localhost:3005/getArticles', {
            method: 'GET',
            mode: 'cors',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            })
        });
        if (res.ok) {
            const body = await res.json();
            console.log("Body: ", body)
            return body;
        } else {
            throw new Error(res.status);
        }
    }

    async getPostInformation(id){
       
        const res = await fetch(`http://localhost:3005/getPostInformation/${id}`, {
            method: 'GET',
            mode: 'cors',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            })
        });
        if (res.ok) {
            const body = await res.json();
            console.log("Body: ", body)
            return body;
        } else {
            throw new Error(res.status);
        }
    }

    async voteIncrement(id){
        console.log("Coming inside vote increment")
        const res = await fetch('http://localhost:3005/vote/increment', {
            method: 'POST',
            mode: 'cors',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }),
            body: JSON.stringify({id: id})
        });
        if (res.ok) {
            const body = await res.json();
            console.log("Body: ", body)
            return body;
        } else {
            throw new Error(res.status);
        }
    }

    async voteDecrement(id){
        console.log("Coming inside vote decrement")
        const res = await fetch('http://localhost:3005/vote/decrement', {
            method: 'POST',
            mode: 'cors',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }),
            body: JSON.stringify({id: id})
        });
        if (res.ok) {
            const body = await res.json();
            console.log("Body: ", body)
            return body;
        } else {
            throw new Error(res.status);
        }
    }

    async addComment(id,comment){
        console.log("Coming inside addComment")
        const res = await fetch('http://localhost:3005/addComment', {
            method: 'POST',
            mode: 'cors',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }),
            body: JSON.stringify({id: id, comment: comment})
        });
        if (res.ok) {
            const body = await res.json();
            console.log("Body: ", body)
            return body;
        } else {
            throw new Error(res.status);
        }
    }
    
    async addPost(topic,title,content){
        console.log("Coming inside addComment")
        const res = await fetch('http://localhost:3005/addPost', {
            method: 'POST',
            mode: 'cors',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }),
            body: JSON.stringify({topic: topic, title: title, content: content})
        });
        if (res.ok) {
            const body = await res.json();
            console.log("Body: ", body)
            return body;
        } else {
            throw new Error(res.status);
        }
    }

    async createTodo(title,user){
        var query = `mutation{
            createToDo(title: "${title}", userId: ${user}){
              title
            }
          }`
        console.log("Query: ", query)
        await this.execute(query);
    }

    async updateTodo(id,title,completed,user){
        var query = `mutation{
            updateToDo(id: "${id}", title: "${title}", completed: ${completed}, user: ${user}){
              title
            }
          }`
        console.log("Query: ", query)
        await this.execute(query);
    }

    /**
     * 
     * @param {object} params
     * @returns {String} params converted to string for usage in graphQL
     */
    paramsToString(params) {
        let paramString = '';
        if (params.constructor === Object && Object.keys(params).length) {
            let tmp = [];
            for (let key in params) {
                let paramStr = params[key];
                if(paramStr !== '') {
                    if (typeof params[key] === 'string') {
                        paramStr = `"${paramStr}"`;
                    }
                    tmp.push(`${key}:${paramStr}`);
                }
            }
            if (tmp.length) {
                paramString = `(${tmp.join()})`;
            }
        }
        return paramString;
    }

}

export default new ApiService();
