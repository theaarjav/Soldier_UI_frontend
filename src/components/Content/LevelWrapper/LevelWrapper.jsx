import React from 'react'
import './LevelWrapper.css'
import Logo from './images/home__logo.png'
import Level from '../LevelWrapper/images/home__level-icon.png'
export const LevelWrapper = () => {
  return (
    <div className='level-wrapper'>
        <div  className='level-indicator'>
            <div className='total-level'>

            <div className='level-meter'>

            <img src={Level} alt='level' className='level-img'/> 
            </div>
            </div>
        </div>
        <img src={Logo} alt='logo' className='logo-img'/>
    </div>
  )
}
