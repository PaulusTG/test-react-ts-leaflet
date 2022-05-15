import { MouseEvent } from 'react';
import Map from '../map/map';
import { Address } from '../../constants';
import { useAppSelector } from '../../hooks';
import { useState } from 'react';
import LinksSection from '../links-section/links-section';
import NewPointForm from '../new-point-form/new-point-form';
import Header from '../header/header';

function MainPage(): JSX.Element {
  const { points } = useAppSelector((state) => state);
  const [isVisible, setIsVisible] = useState(false);

  const handleAddPointClick = (evt: MouseEvent<HTMLElement>) => {
    evt.preventDefault();
    setIsVisible(!isVisible);
  };

  return (
    <main>
      <div className='main-container'>
        <Header />

        <div className='main'>
          <LinksSection clickHandle={handleAddPointClick} />

          <div className='map-container'>
            <Map center={Address} points={points} />
          </div>

          <NewPointForm isVisible={isVisible} />
        </div>
      </div>
    </main>);
}

export default MainPage;
