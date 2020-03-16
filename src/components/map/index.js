import React from 'react';
import { compose, withProps, lifecycle } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, DirectionsRenderer} from "react-google-maps";

const MapComponent = compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyCtcN5baK306MNVBXydSVXgztFG_iGmL2E&v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `900px` }} />,
        mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap,
    lifecycle({
        componentDidUpdate(props) {
            const DirectionsService = new window.google.maps.DirectionsService();

            DirectionsService.route({
                origin: { query: this.props.origin },
                destination: { query: this.props.destination },
                travelMode: window.google.maps.TravelMode.DRIVING,
            }, (result, status) => {
                if (status === window.google.maps.DirectionsStatus.OK) {
                    this.setState({
                        directions: result,
                    });
                } else {
                    console.error(`error fetching directions ${result}`);
                }
            });
        }
    })
)(props =>
    <GoogleMap
        defaultZoom={5}
        defaultCenter={new window.google.maps.LatLng(-10.3333333, -53.2)}
    >
        {props.directions && <DirectionsRenderer directions={props.directions} />}
    </GoogleMap>
);

export default MapComponent;