import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        console.warn(this.props);
        return (
            <div>
                <h2>{ this.props.title}</h2>
            </div>
        )
    }
}
