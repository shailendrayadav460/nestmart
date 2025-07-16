import React from 'react';
import { MapContainer, TileLayer, ZoomControl } from 'react-leaflet';

const WorldMap = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', margin: '2rem 0' }}>
      <MapContainer
        center={[20, 0]} // Center of the map
        zoom={2}
        scrollWheelZoom={true}
        style={{ height: '500px', width: '100%', maxWidth: '90%', borderRadius: '10px' }}
        zoomControl={false} // Hide default control to reposition
      >
        {/* Map Tiles */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Reposition zoom control to top-left like your image */}
        <ZoomControl position="topleft" />
      </MapContainer>
    </div>
  );
};

export default WorldMap;

