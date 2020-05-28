import React, { Component } from "react";

// eslint-disable-next-line react/prefer-stateless-function
class Flat extends Component {
  handleClick = () => {
    this.props.selectFlat(this.props.flat);
  };

  render() {
    const flatPrice = `${this.props.price} ${this.props.priceCurrency}`
    return (
      <div className="flat">
        <p className="flat__price">
          {flatPrice}
        </p>
        <p className="flat__name">{this.props.name}</p>
        <div onClick={this.handleClick}>
          <img src={this.props.imageUrl} alt="" />
        </div>
      </div>
    );
  }
}

export default Flat;
