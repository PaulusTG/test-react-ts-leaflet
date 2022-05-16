/* eslint-disable react-hooks/exhaustive-deps */
import { ChangeEvent, FormEvent, MouseEvent, useEffect, useState } from 'react';
import { DefaultLocation } from '../../constants';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { addPoint, setLocation } from '../../store/actions';

const DEFAULT_FORM_STATE = {
  Title: '',
  Description: '',
  Location: '',
};

type NewPointFormProps = {
  isVisible: boolean,
}

function NewPointForm({ isVisible }: NewPointFormProps): JSX.Element {
  const dispatch = useAppDispatch();
  const { points, newLocation } = useAppSelector((state) => state);
  const [formData, setFormData] = useState(DEFAULT_FORM_STATE);
  let prevPointsCount = 0;

  const clearForm = () => setFormData(DEFAULT_FORM_STATE);

  useEffect(() => {
    const submitButton: HTMLButtonElement | null =
      document.querySelector('.submit_button');
    const { Title, Description, Location } = formData;
    Title.length !== 0 && Description.length !== 0 && Location.length !== 0 && Location.match(/(\d+){1,3}\.(\d+)/gm)
      ? ((submitButton as HTMLButtonElement).disabled = false)
      : ((submitButton as HTMLButtonElement).disabled = true);
  });

  useEffect(() => {
    const { Latitude, Longitude } = newLocation;
    if (Latitude !== 0 && Longitude !== 0) {
      setFormData({ ...formData, Location: `${Latitude.toFixed(5)},${Longitude.toFixed(5)}` });
    }
  }, [newLocation]);

  useEffect(() => {
    if (prevPointsCount !== points.length) {
      clearForm();
    }
  }, [prevPointsCount, points.length]);

  const handleFieldChange = (evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = evt.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const { Title, Location, Description } = formData;
    const latLng = Location.split(',', 2);
    const newId = points[points.length - 1].Id + 1;
    prevPointsCount = points.length;

    dispatch(addPoint({
      Id: newId,
      Title,
      Description,
      DateTime: new Date(),
      Location: {
        Latitude: +(latLng[0]),
        Longitude: +(latLng[1]),
        Zoom: newLocation.Zoom,
      },
    }));
    dispatch(setLocation(DefaultLocation));
  };

  const handleClearButtonClick = (evt: MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    clearForm();
  };

  return (
    <section className={`form-row ${!isVisible ? 'visually-hidden' : ''}`} style={{ marginTop: '15px' }}>
      <form
        className='new-point-form'
        action='#'
        method='post'
        onSubmit={handleFormSubmit}
      >
        <fieldset className='form-group' style={{ width: '500px', marginLeft: 'auto', marginRight: 'auto' }}>
          <div className='form-group mx-sm-3 mb-2'>
            <div>
              <label htmlFor='title'>Название: </label>
              <input
                id='title'
                name='Title'
                className='form-control'
                value={formData.Title}
                onChange={handleFieldChange}
                placeholder='Название'
                maxLength={25}
                required
              >
              </input>
            </div>
            <div>
              <label htmlFor='location'>Координаты: </label>
              <input
                id='location'
                name='Location'
                className='form-control'
                value={formData.Location}
                onChange={handleFieldChange}
                placeholder='Кликни на карту или введи вручную'
                maxLength={50}
                required
              >
              </input>
            </div>
          </div>
          <div className='form-group mx-sm-3 mb-2'>
            <label htmlFor='description'>Описание: </label>
            <textarea
              id='description'
              name='Description'
              className='form-control'
              value={formData.Description}
              onChange={handleFieldChange}
              placeholder='Описание'
              maxLength={80}
              required
            >
            </textarea>
          </div>
          <div className='form-group row' style={{ marginLeft: '25px', width: '450px' }}>
            <button id='submit-button' className='submit_button btn btn-primary col' type='submit' disabled>Добавить</button>
            <button id='clear-button' className='clear_button btn btn-secondary col' type='button' onClick={handleClearButtonClick} style={{ marginLeft: '15px' }}>Очистить форму</button>
          </div>
        </fieldset>
      </form>
    </section>
  );
}

export default NewPointForm;
