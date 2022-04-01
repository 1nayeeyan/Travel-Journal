/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import MapMarker from '../images/map-marker.png';

export default function Cards(props) {
  return (
    <div className="card">
      <img src={props.item.imageUrl} alt={props.item.total} className="card-image" />
      <div className="destination-info">
        <img src={MapMarker} alt="Map Marker" className="map-marker" />
        <h4 className="location">{props.item.location}</h4>
        <a href={props.item.googleMapsUrl} className="maps-link">View on Google Maps</a>
        <div className="break" />
        <h2 className="title">{props.item.title}</h2>
      </div>
      <div className="description">
        <h3 className="date">
          {props.item.startDate}
          {' '}
          -
          {' '}
          {props.item.endDate}
        </h3>
        <p className="description-text">{props.item.description}</p>
      </div>
    </div>
  );
}
