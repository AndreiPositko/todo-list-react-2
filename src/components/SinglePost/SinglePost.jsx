import React, { Component } from 'react'

export default class SinglePost extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            body: '',
            id: '',
        }
    }

    async componentDidMount() {
        const { id } = this.props.match.params;
        const post = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then((result) => result.json())
        console.log('POST', post);
        this.setState({
            title: post.title,
            body: post.body,
            id: post.id,
        })
    }

    render() {
        const { title, body, id } = this.state;
        return (
            <div>
                <h2>{ this.props.title }</h2>
                <h3>{ id } { title }</h3>
                <p>{ body }</p>
            </div>
        )
    }
}
