import React, { Component } from 'react'

export default class Search extends Component {

    changeHandler = (e) => {
        const { updateSearch } = this.props;
        updateSearch(e.target.value);
    }

    render() {
        // console.log(this.state.search);
        return (
            <div>
                <input type="text" placeholder="Search" onChange={this.changeHandler}/>
            </div>
        )
    }
}
