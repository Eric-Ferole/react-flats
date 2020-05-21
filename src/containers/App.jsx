// Libs
import React, { Component } from 'react';

// Content
import flats from "./assets/flatsData";


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      <div>
        <Flat />
        <FlatList />
      </div>
    )
  }
};

export default App;


// const app = () => {
//   return <p>Bonjour</p>;
// };
