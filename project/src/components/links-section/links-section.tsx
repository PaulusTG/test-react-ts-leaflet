import { MouseEvent } from 'react';
import { Link, useLocation } from 'react-router-dom';

type LinksSectionProps = {
  clickHandle: ((evt: MouseEvent<HTMLElement>) => void) | (() => void),
}

function LinksSection({ clickHandle }: LinksSectionProps): JSX.Element {
  const path = useLocation();

  return (
    <section className='links-section'>
      <Link to={'/'} className='link-button'>Карта</Link>
      <Link to={'/points'} className='link-button'>Все точки</Link>
      {path.pathname === '/' ? <Link onClick={clickHandle} to={''} className='link-button'>Добавить точку</Link> : ''}
    </section>
  );
}

export default LinksSection;
