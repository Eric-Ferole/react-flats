// Libs
import React, { Component } from 'react';

// Components
import Flat from '../Flat/Flat';

// // Content
// import FLAT_DATA from "../../../assets/flatsData";

class FlatList extends Component {

    render() {
        return (
            <div className="flat-list">
                    {this.state.flats.map((flat, index) => <Flat key={index} imageUrl={flat.imageUrl} name={flat.name} price={flat.price} priceCurrency={flat.priceCurrency}/>)}
            </div>
        )
    }
    
}

export default FlatList;                