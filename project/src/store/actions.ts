import { createAction } from '@reduxjs/toolkit';

export const addPoint = createAction('map/addPoint', (value) => ({
  payload: value,
}));

export const removePoint = createAction('map/removePoint', (value) => ({
  payload: value,
}));

export const setLocation = createAction('map/setLocation', (value) => ({
  payload: value,
}));
