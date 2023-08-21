//Componentes
import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import "leaflet/dist/leaflet.css";

import MakerMap from "./Maker";

const Map = ({ dataCountry }) => {
  const position = [dataCountry.latlng[0], dataCountry.latlng[1]];
  return (
    <>
      <MapContainer center={position} zoom={1} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MakerMap dataCountry={dataCountry} />
      </MapContainer>
    </>
  );
};

export default Map;
