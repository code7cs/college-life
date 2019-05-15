var CommentForm = React.createClass({
    displayName: "CommentForm",

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
        //alert('submit Success!');
        this.props.onCommentSubmit(comment);
        this.setState({ author: "", text: "" });
    },
    render: function() {
        return React.createElement(
            "form",
            { className: "commentForm" },
            "Name:   ",
            React.createElement("input", {
                type: "text",
                value: this.state.author,
                onChange: this.handleAuthorChange,
                placeholder: "your name"
            }),
            "Comment:",
            React.createElement("input", {
                type: "text",
                value: this.state.text,
                onChange: this.handleTextChange,
                placeholder: "Say something..."
            }),
            React.createElement("input", { type: "button", onClick: this.handleSubmit, value: "发送" }),
            " ",
            React.createElement("br", null)
        );
    }
});

var Comment = React.createClass({
    displayName: "Comment",

    render: function() {
        return React.createElement(
            "div",
            { className: "comment" },
            React.createElement(
                "h4",
                { className: "commentAuthor" },
                this.props.author,
                " at  ",
                React.createElement("span", null, this.props.time)
            ),
            React.createElement("p", null, this.props.children)
        );
    }
});

var CommentList = React.createClass({
    displayName: "CommentList",

    render: function() {
        var commentNodes = this.props.data.map(function(comment) {
            return React.createElement(
                Comment,
                { author: comment.author, time: comment.time, key: comment.id },
                comment.text
            );
        });
        return React.createElement("div", { className: "commentList" }, commentNodes);
    }
});

var CommentBox = React.createClass({
    displayName: "CommentBox",

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
    render: function() {
        return React.createElement(
            "div",
            { className: "commentBox" },
            React.createElement("h1", null, "Comments"),
            React.createElement(CommentList, { data: this.state.data }),
            React.createElement(CommentForm, { onCommentSubmit: this.handleCommentSubmit })
        );
    }
});

ReactDOM.render(React.createElement(CommentBox, null), document.getElementById("content"));
