import { Link } from 'react-router-dom';
import { APIRoute } from '../../constants';

function NotFound(): JSX.Element {
  return (
    <div style={{ marginLeft: '50px', position: 'absolute', marginTop: '20px' }}>
      <h1>404. Not Found</h1>
      <Link to={APIRoute.Main} style={{ margin: '10px', fontSize: '18px' }}>Вернуться на главную</Link>
    </div>
  );
}

export default NotFound;
