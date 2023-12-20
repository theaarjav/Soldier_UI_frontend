import React from 'react'
import { SoldierLevel } from './SoldierLevel/SoldierLevel'
import { SoldierSelect } from './SoldierSelect/SoldierSelect'
import { SoldierStats } from './SoldierStats/SoldierStats'
import './SoldierInfo.css'
export const SoldierInfo = () => {
  return (
    <div className='soldier-info'>
        <SoldierLevel/>
        <div className='soldier-details-box'>
            <SoldierSelect/>
            <SoldierStats/>
        </div>
    </div>
  )
}
