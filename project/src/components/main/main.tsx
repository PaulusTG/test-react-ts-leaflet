/* eslint-disable no-console */
// import contactsMap from 'assets/img/contacts-map.jpg';
// import './style.css';
// import 'leaflet/dist/leaflet.css';
import Map from '../map/map';
import { Address } from '../../constants';

function Main(): JSX.Element {
  return (
    <main>
      <div>
        <header>
          <h1>Контакты</h1>
          <p>квесты в Санкт-Петербурге</p>
        </header>

        <div className='main'>
          <dl>
            <dt>Адрес</dt>
            <dd>
              <address>
                Санкт-Петербург,
                <br />
                Набережная реки Карповка, д 5
              </address>
            </dd>

            <dt>Режим работы</dt>
            <dd>Ежедневно, с 9:00 до 20:00</dd>

            <dt>Телефон</dt>
            <dd>
              <a href="tel:8 (800) 333-55-99">
                8 (800) 333-55-99
              </a>
            </dd>

            <dt>E-mail</dt>
            <dd>
              <a href="mailto:info@escape-room.ru">
                info@escape-room.ru
              </a>
            </dd>
          </dl>

          <div className='map-container'>
            <Map center={Address} points={[Address]} />
            {/*<img
              className='map-image'
              src='img/contacts-map.jpg'
              alt="мы находимся по адресу Санкт-Петербург, Набережная реки Карповка, д 5"
              width="649"
              height="336"
  />*/}
          </div>
        </div>
      </div>
    </main>);
}

export default Main;
