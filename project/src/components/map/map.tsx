// import { Icon } from 'leaflet';
// import { useEffect, useRef } from 'react';
// import useMap from '../../hooks/use-map';
import 'leaflet/dist/leaflet.css';
// import { MapStyle } from '../../constants';
import { Location } from '../../types/data';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

type MapProps = {
  center: Location;
  points: Location[];
};

// const defaultCustomIcon = new Icon({
//   iconUrl: 'img/pin.svg',
//   iconSize: [27, 39],
//   iconAnchor: [13.5, 39],
// });

// function Map({ center, points }: MapProps): JSX.Element {
//   const mapRef = useRef(null);
//   const map = useMap(mapRef, center);

//   useEffect(() => {
//     if (map) {
//       points.forEach((point) => {
//         const marker = new Marker({
//           lat: point.Latitude,
//           lng: point.Longitude,
//         });

//         marker
//           .setIcon(defaultCustomIcon)
//           .addTo(map);
//       });

//     }
//   }, [map, points]);

//   return <div key={new Date().getTime()} data-testid="map" style={{ height: `${MapStyle.Height}px`, width: `${MapStyle.Width}px` }} ref={mapRef} />;
// }

function Map({ center, points }: MapProps): JSX.Element {
  return (
    <MapContainer center={[center.Latitude, center.Longitude]} zoom={center.Zoom} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        url='https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png'
      />
      <Marker position={[points[0].Latitude, points[0].Longitude]}>
        <Popup>
          Test
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;
