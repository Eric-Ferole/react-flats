// Libs
import React, { Component } from 'react';

// Components
import Flat from '../components/Flat/Flat';
import FlatList from '../components/FlatList/FlatList';

// Styles
import '../../assets/stylesheets/application.scss';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <div className="App">
        <div className="left-side">
          <div className="flat-list">
            <Flat />
            <Flat />
            <Flat />
            <Flat />
            <Flat />
            <Flat />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
