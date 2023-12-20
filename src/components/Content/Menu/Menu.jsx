import React from 'react'
import './Menu.css'
export const Menu = () => {
  return (

    <div className='menu'>
      <div className="home-menu">
        <div className='menu-text'>
          Home
        </div>
        <div className='menu-item-line'></div>
      </div>
      <div className="multiplayer-menu">
        <div className='menu-text'>
          multiplayer
        </div>
        <div className='menu-item-line'></div>
      </div>
      <div className="campaign-menu">
        <div className='menu-text'>
          campaign
        </div>
        <div className='menu-item-line'></div>
      </div>
      <div className="soldier-menu-menu">
        <div className='soldier-text'>
          soldier
        </div>
        <div className='soldier-line'></div>
      </div>
      <div className="store-menu">
        <div className='menu-text'>
          store
        </div>
        <div className='menu-item-line'></div>
      </div>
      <div className="more-menu">
        <div className='menu-text'>
          more
        </div>
        <div className='menu-item-line'></div>
      </div>
      <div className='menu-bar'></div>
    </div>
    
  )
}
