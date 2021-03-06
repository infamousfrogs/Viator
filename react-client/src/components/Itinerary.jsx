import React from 'react';
import ItineraryItems from './ItineraryItems.jsx';
import Subheader from 'material-ui/Subheader';


const Itinerary = (props) => (
  <div>
    {Object.keys(props.itinerary).sort((a, b) => new Date(a) - new Date(b)).map((day, i) =>
      <div key={i}>
        <Subheader>{day}</Subheader>
        <ItineraryItems itineraryItems={props.itinerary[day]} />
      </div>
    )}
  </div>
);

export default Itinerary;