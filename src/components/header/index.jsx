
import React from 'react';
import MenuItem from './MenuItem';
import SiteLogo from './SiteLogo'
import './styles.scss'



function App() {
  return (
    <div className="Header">
      <MenuItem label="HOME" routerLink="/" />
      <MenuItem label="ARTWORK" routerLink="/Artwork"/>

      <SiteLogo/>
      <MenuItem label="ABOUT" routerLink="/About" />
      <MenuItem label="CONTACT" routerLink="/Contact" />
    </div>
  );
}

export default App;
