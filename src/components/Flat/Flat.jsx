import React, { Component } from 'react';

class Flat extends Component {

    render() {

        return (
            <div className="flat">
                <p className="flat flat__price">{this.props.price} {this.props.priceCurrency}</p>
                <p className="flat flat__name">{this.props.name}</p>
                <img src={this.props.imageUrl} alt=""/>
            </div>
        )
    }

}

export default Flat;
