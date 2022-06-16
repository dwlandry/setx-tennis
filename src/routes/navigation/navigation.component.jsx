import { Link, Outlet } from 'react-router-dom';

import './navigation.styles.scss';

const Navigation = () => {
  return (
    <>
      <nav className='navigation'>
        <Link className='logo-container' to='/'>
          <img
            className=''
            src='https://th.bing.com/th/id/R.b3c0a6e6f30f67103f5583cacab9ce4c?rik=82T96J%2feucGrNg&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_23128.png&ehk=KzpI%2bCGhJWUqVGZ5TeXeW80v1ZZQDEkr2gCqN27r6g8%3d&risl=&pid=ImgRaw&r=0'
            alt='logo'
          />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/coordinator'>
            COORDINATOR
          </Link>
          <Link className='nav-link' to='/usta-leagues'>
            USTA LEAGUES
          </Link>
          <Link className='nav-link' to='/players'>
            PLAYER DIRECTORY
          </Link>
          <Link className='nav-link' to='/sign-in'>
            SIGN IN
          </Link>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navigation;

/*
'usta-leagues
'tournaments'
'high-school
'courts'
'shop'
'players'
'resources'
'setta'
*/
