import React, { Component } from 'react'
import { withLoader } from '../../hocs/withLoader/withLoader';
import { Link } from 'react-router-dom';


class Photos extends Component {
    constructor() {
        super();
        this.state = {
            photos: [],
        }
    }

    getPhotos = () => {
        this.props.showLoader();
        setTimeout(async () => {
            const photos = await fetch('https://jsonplaceholder.typicode.com/photos').then((photo) => photo.json());
        this.setState({
            photos,
        })
        this.props.hideLoader();
        })
    }

    componentDidMount() {
        this.getPhotos();
    }

    render() {
        const { photos } = this.state;
        return (
            <div>
                <section>
                    <h2>{ this.props.title }</h2>
                    <ul>
                        {photos.map((photo) => <li key={photo.id}><Link to={`/photos/${photo.id}`}>{photo.title}<img src={photo.thumbnailUrl} alt={photo.title }></img></Link></li>)}
                    </ul>
                </section>
            </div>
        )
    }
}

export default withLoader(Photos);
