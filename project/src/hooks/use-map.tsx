import { Map, TileLayer } from 'leaflet';
import { MutableRefObject, useEffect, useState } from 'react';
import { LAYER_ATTRIBUTION, LAYER_URL } from '../constants';
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
        LAYER_URL,
        {
          attribution:
            LAYER_ATTRIBUTION,
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
