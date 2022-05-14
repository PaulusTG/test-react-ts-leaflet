import { Location } from './types/data';

enum MapStyle {
  Height = 336,
  Width = 649,
}

const Address: Location = {
  Latitude: 59.96810,
  Longitude: 30.31688,
  Zoom: 16,
};

const NameSpace = {
  Data: 'DATA',
};

const APIRoute = {
  Quests: '/quests',
  Orders: '/orders',
};

const DefaultQuest = {
  id: 1,
  title: 'Склеп',
  description: 'Средневековое кладбище таит в себе много страшных тайн. Местные жители говорят, что в склепе похоронен граф вампир, который по ночам выходит на охоту, чтобы испить человеческой крови. Через час солнце опустится за горизонт, успеете ли вы убить вампира и выбраться из склепа?',
  previewImg: 'img/preview-sklep.jpg',
  coverImg: 'img/cover-sklep.jpg',
  type: 'horror',
  level: 'hard',
  peopleCount: [2, 5],
  duration: 120,
};

export { Address, MapStyle, NameSpace, APIRoute, DefaultQuest };
