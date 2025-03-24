import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { LatLngExpression } from 'leaflet'; // Importe o tipo LatLngExpression

interface ContactMapProps {
  latitude: number;
  longitude: number;
}

const ContactMap: React.FC<ContactMapProps> = ({ latitude, longitude }) => {
  const [position] = useState<LatLngExpression>({ lat: latitude, lng: longitude });

  return (
    <MapContainer
      center={position} // Agora o TypeScript reconhece corretamente o tipo LatLngExpression
      zoom={18}
      scrollWheelZoom={false}
      style={{ width: '100%', height: '400px', zIndex: 1 }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>
          Nossa loja está aqui!
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default ContactMap;