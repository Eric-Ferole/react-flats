import React, { Component } from 'react';

class Flat extends Component {

render() {

        return (
            <div className="flat">
                <p className="flat__price">{this.props.price} {this.props.priceCurrency}</p>
                <p className="flat__name">{this.props.name}</p>
                <a href="/"><img src={this.props.imageUrl} alt=""/></a>
            </div>
        )
    }

}

export default Flat;
