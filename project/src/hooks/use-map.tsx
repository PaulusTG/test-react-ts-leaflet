import { Map, TileLayer } from 'leaflet';
import { MutableRefObject, useEffect, useState } from 'react';
import { Location } from '../types/data';

function useMap(
  mapRef: MutableRefObject<HTMLElement | null>,
  { Latitude, Longitude, Zoom }: Location,
): Map | null {
  const [map, setMap] = useState<Map | null>(null);

  useEffect(() => {
    if (mapRef.current !== null && map === null) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: Latitude,
          lng: Longitude,
        },
        zoom: Zoom,
      });

      const layer = new TileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        },
      );
      instance.addLayer(layer);

      setMap(instance);
    }
    map?.setView({ lat: Latitude, lng: Longitude }, Zoom);
  }, [mapRef, map, Latitude, Longitude, Zoom]);

  return map;
}

export default useMap;
