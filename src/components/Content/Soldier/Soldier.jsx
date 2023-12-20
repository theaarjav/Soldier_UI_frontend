import React from 'react'
import { SoldierLook } from './SoldierLook/SoldierLook'
import './Soldier.css'
import { SoldierInfo } from './SoldierInfoW/SoldierInfo'
export const Soldier = () => {
  return (
    <div className='bf4__content-w  w-tab-content'>

    <div className='soldier'>
        <SoldierLook/>
        <SoldierInfo/>
    </div>
    </div>
  )
}
