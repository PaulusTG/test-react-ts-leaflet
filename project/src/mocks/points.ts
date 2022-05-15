import { Point } from '../types/data';

export const Points: Point[] = [
  {
    Id: 1,
    Title: 'Точка1',
    Description: 'Текст1',
    DateTime: new Date(),
    Location: {
      Latitude: 59.96810,
      Longitude: 30.31688,
      Zoom: 16,
    },
  },
  {
    Id: 2,
    Title: 'Точка2',
    Description: 'Текст2',
    DateTime: new Date(),
    Location: {
      Latitude: 59.96710,
      Longitude: 30.31588,
      Zoom: 16,
    },
  },
  {
    Id: 3,
    Title: 'Точка3',
    Description: 'Текст3',
    DateTime: new Date(),
    Location: {
      Latitude: 59.96910,
      Longitude: 30.31788,
      Zoom: 16,
    },
  },
];
