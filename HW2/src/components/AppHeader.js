import React from 'react';
import Logo from './Logo';
import Navigation from './Navigation';
import UserMenu from './UserMenu';
import appLogo from '../logo.png';
import photo from '../photo.jpg';

const Nav = ['Menu', 'About', 'Contact us', 'Delivery'];

const AppHeader = () => (
  <header className="Header">
    <div className="Header__logo">
      <Logo image={appLogo} width={80} height={100} />
    </div>
     <div className="menu">
      <Navigation items={Nav} />
    </div>
    <div className="Header__usermenu">
      <UserMenu avatar={photo} name="Bob Ross" />
    </div>
  </header>
);

export default AppHeader;