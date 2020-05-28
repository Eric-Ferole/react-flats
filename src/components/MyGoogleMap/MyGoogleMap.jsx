import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

// API KEY
import CLE from "../../../../../API/googleMapAPIKEY";


// Components
import Marker from "../Marker/Marker";


const AnyReactComponent = ({ text }) => <div>{text}</div>;

// eslint-disable-next-line react/prefer-stateless-function
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 48.8534,
      lng: 2.3488,
    },
    zoom: 13,
  };

  render() {
    console.log("FUCK FUCK", CLE)
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={ { key: CLE } }
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          {
            this.props.flats.map((flat) => {
              return <Marker lat={flat.lat} lng={flat.lng} key={flat.id} text="My Marker" />
            })
          }
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
