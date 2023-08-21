// Funciones y hooks
import { Marker, useMap } from "react-leaflet";
import { useEffect } from "react";
import L from "leaflet";

const MakerMap = ({ dataCountry }) => {
  const map = useMap();

  const customIcon = L.icon({
    iconUrl: dataCountry.flags.svg, 
    iconSize: [23, 20], 
    iconAnchor: [16, 32], 
    popupAnchor: [0, -32],
  });
  useEffect(() => {
    dataCountry
      ? map.flyTo([dataCountry.latlng[0], dataCountry.latlng[1]], 6, {
          duration: 2,
        })
      : null;
  }, [dataCountry, map]);

  return dataCountry ? (
    <Marker
      position={{ lat: dataCountry.latlng[0], lng: dataCountry.latlng[1] }}
      icon={customIcon}
    />
  ) : null;
};

export default MakerMap;
