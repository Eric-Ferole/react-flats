// Libs
import React, { Component } from 'react';
// import GoogleMapReact from 'google-map-react';


// Components
import FlatList from '../components/FlatList/FlatList';
import SimpleMap from '../components/MyGoogleMap/MyGoogleMap';

// Content
import FLAT_DATA from '../../assets/flatsData'

// Styles
import '../../assets/stylesheets/application.scss';


class App extends Component {
  constructor(props) {
    super(props);  

    this.state = {
      flats: FLAT_DATA,
      // currentFlat:
    };
  }


  render() {
    return (
      <div className="App">
        <div className="left-side">
          <FlatList flats={this.state.flats} />
        </div>
        <div className="right-side">
          <SimpleMap flats={this.state.flats} />
        </div>
      </div>
    );
  }
}

export default App;
