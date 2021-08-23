// write your CatList component here
import React, { Component } from 'react';


class CatList extends Component {

    renderCatPics = () => this.props.catPics.map(pic => (
        <img alt={pic.id} src={pic.url} key={pic.id} />
    ));

    loadingPrompt = () => {
        if (this.props.loading) {
            return <h1>Loading...</h1>
        }
    }

    render() {
        return (
            <div>
                {this.loadingPrompt()}
                {this.renderCatPics()}
            </div>
        )
    }

}

export default CatList;