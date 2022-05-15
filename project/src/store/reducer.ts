import { createReducer } from '@reduxjs/toolkit';
import { DefaultLocation } from '../constants';
import { Points } from '../mocks/points';
import { InitialState } from '../types/state';
import { addPoint, setLocation, removePoint } from './actions';

const initialState: InitialState = {
  points: Points,
  newLocation: DefaultLocation,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addPoint, (state, action) => {
      state.points = [
        ...state.points,
        action.payload,
      ];
    })
    .addCase(removePoint, (state, action) => {
      state.points = state.points.filter((point) => point.Id !== action.payload);
    })
    .addCase(setLocation, (state, action) => {
      state.newLocation = action.payload;
    });
});

export { reducer };
