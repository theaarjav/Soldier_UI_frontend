import React from 'react'
import './Content.css'
import { Menu } from './Menu/Menu'
import { Soldier } from './Soldier/Soldier'
import { LevelWrapper } from './LevelWrapper/LevelWrapper'

export const Content = () => {
  return (
    <div className='soldier-details'>
        <Menu/>
        <LevelWrapper/>
        <Soldier/>
    </div>
  )
}
