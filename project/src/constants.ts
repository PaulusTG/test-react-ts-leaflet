import { Location } from './types/data';

const LAYER_URL = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';
const LAYER_ATTRIBUTION = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';

const Address: Location = {
  Latitude: 59.96810,
  Longitude: 30.31688,
  Zoom: 16,
};

const DefaultLocation: Location = {
  Latitude: 0,
  Longitude: 0,
  Zoom: 0,
};

enum MapStyle {
  Height = 600,
  Width = 800,
  Margin = 20,
}

enum APIRoute {
  Main = '/',
  Points = '/points',
}

export { Address, MapStyle, APIRoute, DefaultLocation, LAYER_URL, LAYER_ATTRIBUTION };
