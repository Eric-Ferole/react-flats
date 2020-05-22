import React, { Component } from 'react';

// Styles
import '../../../assets/stylesheets/application.scss';

class Flat extends Component {

    constructor(props) {
        super(props)

        this.state = {
            id: "1"
        }
    }
    render() {
        const url = `https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat${this.state.id}.jpg`;

        return (
            <div className="flat">
                <p className="price">160$</p>
                <p className="flat-name">Super Condo de feu</p>
                <img src={url} alt=""/>
            </div>
        )
    }

}

export default Flat;
