// Libs
import React, { Component } from "react";

// Components
import Flat from "../Flat/Flat";

// eslint-disable-next-line react/prefer-stateless-function
class FlatList extends Component {

selectFlat = (flat) => {
    console.log('bonjour');
}
    

  render() {
    return (
      <div className="flat-list">
        {this.props.flats.map((flat, index) => (
          <Flat
            key={index}
            imageUrl={flat.imageUrl}
            name={flat.name}
            price={flat.price}
            priceCurrency={flat.priceCurrency}
            selectFlat={this.selectFlat}
          />
        ))}
      </div>
    );
  }
}

export default FlatList;
