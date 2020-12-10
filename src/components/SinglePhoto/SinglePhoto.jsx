import React, { Component } from 'react'

export default class SinglePhoto extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            thumbnailUrl: '',
            id: '',
        }
    }

    async componentDidMount() {
        const { id } = this.props.match.params;
        const photo = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`).then((response) => response.json());
        console.log(photo);
        this.setState({
            title: photo.title,
            thumbnailUrl: photo.thumbnailUrl,
            id: photo.id,
        })
    }

    render() {
        const { title, thumbnailUrl, id } = this.state;
        return (
            <div>
                 <h2>{this.props.title}</h2>
                 <h3>{id} {title}</h3>
                 <img src={thumbnailUrl }/>
            </div>
        )
    }
}
