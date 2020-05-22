// Libs
import React, { Component } from 'react';

// Components
import FlatList from '../components/FlatList/FlatList';

// Content
import FLAT_DATA from '../../assets/flatsData'

// Styles
import '../../assets/stylesheets/application.scss';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flats: [FLAT_DATA]
    };
  }

  render() {
    return (
      <div className="App">
        <div className="left-side">
            <FlatList />
        </div>
      </div>
    );
  }
}

export default App;
