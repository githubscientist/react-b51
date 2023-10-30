import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faGear, faRankingStar, faRing } from '@fortawesome/free-solid-svg-icons';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { faBell, faUser } from '@fortawesome/free-regular-svg-icons';

import '../styles/App.css';


function Header() {
  return (
    <div className='header'>
        <div className='menuIcon'>
            <FontAwesomeIcon icon={faBars} size='2xl'/>
          </div>
          
          <div className='wordleHeading'>
              <h1>Wordle</h1>
          </div>

          <div className='rightIcons'>
            <FontAwesomeIcon icon={faQuestionCircle} size='2xl' className='icon' />
            <FontAwesomeIcon icon={faRankingStar} size='2xl' className='icon'/>
            <FontAwesomeIcon icon={faGear} size='2xl' className='icon'/>
              
              <button className='rightCornerButton'>
                Subscribe to Games
              </button>
          </div>

          
    </div>
  )
}

export default Header;