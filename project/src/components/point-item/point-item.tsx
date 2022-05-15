import { Point } from '../../types/data';

type PointItemProps = {
  point: Point,
}

function PointItem({ point }: PointItemProps): JSX.Element {
  return (
    <>
      <p><b>Название: </b>{`${point.Title}`}</p>
      <p><b>Описание: </b>{`${point.Description}`}</p>
      <p><b>Дата/время создания: </b>{`${new Intl.DateTimeFormat('ru-RU', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
      }).format(new Date(point.DateTime))}`}
      </p>
      <p><b>Координаты: </b>{`Координаты: ${point.Location.Latitude}, ${point.Location.Longitude}`}</p>
    </>
  );
}

export default PointItem;
