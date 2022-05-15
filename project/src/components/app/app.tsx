import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { APIRoute } from '../../constants';
import MainPage from '../main-page/main-page';
import NotFound from '../not-found/not-found';
import PointsList from '../points-list/points-list';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={APIRoute.Main}
          element={<MainPage />}
        />
        <Route
          path={APIRoute.Points}
          element={<PointsList />}
        />
        <Route
          path='*'
          element={<NotFound />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
