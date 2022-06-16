import { Link, Outlet } from 'react-router-dom';
import LinkContainer from 'react-router-bootstrap/LinkContainer';
import NavLink from 'react-bootstrap/NavLink';
import Nav from 'react-bootstrap/Nav';

import './navigation.styles.scss';

const Navigation = () => {
  return (
    <>
      <nav className='navigation fixed-top navbar navbar-expand-lg navbar-light bg-light'>
        <div className='container'>
          <LinkContainer className='logo-container navbar-brand mb-0 h1' to='/'>
            <img
              className='d-inline-block align-top'
              src='https://th.bing.com/th/id/R.b3c0a6e6f30f67103f5583cacab9ce4c?rik=82T96J%2feucGrNg&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_23128.png&ehk=KzpI%2bCGhJWUqVGZ5TeXeW80v1ZZQDEkr2gCqN27r6g8%3d&risl=&pid=ImgRaw&r=0'
              alt='logo'
            />
          </LinkContainer>
          <button
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNav'
            className='navbar-toggler'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon' />
          </button>
          <div
            className='nav-links-container collapse navbar-collapse'
            id='navbarNav'>
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <LinkContainer className='nav-link active' to='/usta-leagues'>
                  USTA LEAGUES
                </LinkContainer>
              </li>
              <li className='nav-item'>
                <LinkContainer className='nav-link' to='/tournaments'>
                  TOURNAMENTS
                </LinkContainer>
              </li>
              <li className='nav-item'>
                <LinkContainer className='nav-link' to='/high-school'>
                  HIGH SCHOOL
                </LinkContainer>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/courts'>
                  COURTS
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/players'>
                  PLAYER DIRECTORY
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/shop'>
                  SHOP
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/resources'>
                  RESOURCES
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/setta'>
                  SETTA
                </Link>
              </li>
            </ul>
          </div>
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
