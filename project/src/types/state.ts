import { store } from '../store';
import { Location, Point } from './data';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type InitialState = {
  points: Point[],
  newLocation: Location,
}
