import React, { Component } from 'react';

class Flats extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }
    render() {
        return (
            <div>
                <p className="price">160$</p>
                <p className="flat-name">Super Condo de feu</p>
                <img src={this.props.url} alt=""/>
            </div>
        )
    };
};

export default Flats;