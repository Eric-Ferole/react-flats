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
      <div>
        <p>Bonsoir Bonsoir</p>
        <Flat />
        <FlatList />
      </div>
    );
  }
}

export default App;
