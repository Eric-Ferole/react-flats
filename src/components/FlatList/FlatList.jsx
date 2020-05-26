// Libs
import React, { Component } from 'react';

// Components
import Flat from '../Flat/Flat';

class FlatList extends Component {

    render() {
        return (
            <div className="flat-list">
                {console.log(this.props.flats)}
                    {this.props.flats.map((flat, index) => <Flat key={index} imageUrl={flat.imageUrl} name={flat.name} price={flat.price} priceCurrency={flat.priceCurrency}/>)}
            </div>
        )
    }
    
}

export default FlatList;                