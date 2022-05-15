import { MouseEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { removePoint } from '../../store/actions';
import Header from '../header/header';
import LinksSection from '../links-section/links-section';
import PointItem from '../point-item/point-item';

function PointsList(): JSX.Element {
  const { points } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  const handleButtonClick = (evt: MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    dispatch(removePoint(Number(evt.currentTarget.id)));
  };

  return (
    <main>
      <div className='main-container'>
        <Header />

        <div className='main'>
          <LinksSection clickHandle={() => null} />

          <section className='points-list' style={{ margin: '20px' }}>
            <ul className='list-group'>
              {points.map((point) => (
                <li key={point.Id} className='list-group-item'>
                  <PointItem point={point} />
                  <button id={`${point.Id}`} className='btn btn-primary' onClick={handleButtonClick}>Удалить</button>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </main>);
}

export default PointsList;
