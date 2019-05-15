var CommentForm = React.createClass({
    getInitialState: function() {
        return { author: "", text: "" };
    },
    handleAuthorChange: function(e) {
        this.setState({ author: e.target.value });
    },
    handleTextChange: function(e) {
        this.setState({ text: e.target.value });
    },
    handleSubmit: function(e) {
        e.preventDefault();
        var author = this.state.author;
        var text = this.state.text;
        var comment = {
            author: author,
            text: text
        };
        if (!text || !author) {
            return;
        }
        this.props.onCommentSubmit(comment);
        this.setState({ author: "", text: "" });
    },
    render: function() {
        return (
            <form className="commentForm">
                Name:
                <input
                    type="text"
                    value={this.state.author}
                    onChange={this.handleAuthorChange}
                    placeholder="your name"
                />
                &nbsp;&nbsp; Comment:
                <input
                    type="text"
                    value={this.state.text}
                    onChange={this.handleTextChange}
                    placeholder="Say something..."
                />
                &nbsp;&nbsp;
                <input type="button" onClick={this.handleSubmit} value="send" />
                <br />
            </form>
        );
    }
});

var Comment = React.createClass({
    render: function() {
        return (
            <div className="comment">
                <h4 className="commentAuthor">
                    {this.props.author} at
                    <span> {this.props.time}</span>
                </h4>
                <p>{this.props.children}</p>
            </div>
        );
    }
});

var CommentList = React.createClass({
    render: function() {
        var commentNodes = this.props.data.map(function(comment) {
            return (
                <Comment author={comment.author} time={comment.time} key={comment.id}>
                    {comment.text}
                </Comment>
            );
        });
        return <div className="commentList">{commentNodes}</div>;
    }
});

var commonFuns = {
    alertFun: function() {
        alert("commonFuns");
    }
};

var Timer = React.createClass({
    mixins: [commonFuns],
    getInitialState: function() {
        return {
            seconds: 0
        };
    },
    componentDidMount: function() {
        setInterval(this.timeAdd, 1000);
    },
    timeAdd: function() {
        this.setState({
            seconds: this.state.seconds + 1
        });
    },
    handleClick: function() {
        this.alertFun();
    },
    render: function() {
        return (
            <div className="timer">
                Running : <strong onClick={this.handleClick}>{this.state.seconds}</strong> S !
            </div>
        );
    }
});

var CommentBox = React.createClass({
    getInitialState: function() {
        return {
            data: [
                { id: 1, author: "Tom Hanks", text: "This is the first comment.", time: "2015-12-02 15:05:59" },
                { id: 2, author: "Jerry Smith", text: "This is the second comment.", time: "2015-12-02 15:06:13" }
            ]
        };
    },
    handleCommentSubmit: function(comment) {
        var commentList = this.state.data;
        comment.id = Date.now();
        comment.time = new Date().toLocaleString();
        var newCommentList = commentList.concat([comment]);
        this.setState({ data: newCommentList });
    },
    handlerTest: function(e) {
        console.log(this.props);
    },
    render: function() {
        return (
            <div className="commentBox">
                <h1>Comments </h1>
                <CommentList data={this.state.data} />
                <CommentForm onCommentSubmit={this.handleCommentSubmit} />
            </div>
        );
    }
});

var props = { foo: "haha", bar: "mama" };

ReactDOM.render(<CommentBox {...props} />, document.getElementById("content"));
