import { Icon, LeafletMouseEvent, Marker } from 'leaflet';
import { useEffect, useRef } from 'react';
import useMap from '../../hooks/use-map';
import 'leaflet/dist/leaflet.css';
import { MapStyle } from '../../constants';
import { Location, Point } from '../../types/data';
import { useAppDispatch } from '../../hooks';
import { setLocation } from '../../store/actions';

type MapProps = {
  center: Location;
  points: Point[];
};

const defaultCustomIcon = new Icon({
  iconUrl: 'img/pin.svg',
  iconSize: [27, 39],
  iconAnchor: [13.5, 39],
});

function Map({ center, points }: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, center);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const handleMapClick = (evt: LeafletMouseEvent) => {
      const newLocation = {
        Latitude: evt.latlng.lat,
        Longitude: evt.latlng.lng,
        Zoom: center.Zoom,
      };
      dispatch(setLocation(newLocation));
    };

    if (map) {
      points.forEach((point) => {
        const marker = new Marker({
          lat: point.Location.Latitude,
          lng: point.Location.Longitude,
        });

        marker
          .setIcon(defaultCustomIcon)
          .bindPopup(`<p><b>Название: </b>${point.Title}</p>
          <b>Описание: </b><p>${point.Description}</p>
          <b>Дата/время создания: </b><p>${new Intl.DateTimeFormat('ru-RU', { day: 'numeric', month: 'long', year: 'numeric', hour: 'numeric', minute: 'numeric' }).format(new Date(point.DateTime))}</p>
          <b>Координаты: </b><p>${point.Location.Latitude},${point.Location.Longitude}</p>`)
          .addTo(map);
      });
      map.on('click', handleMapClick);
    }
  }, [center.Zoom, dispatch, map, points]);

  return <div data-testid="map" style={{ height: `${MapStyle.Height}px`, width: `${MapStyle.Width}px`, marginTop: `${MapStyle.Margin}px` }} ref={mapRef}></div>;
}

export default Map;
