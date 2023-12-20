import React from 'react'
import './SoldierLook.css'
import PremiumTag from '../premium_dog_tag.png'
import Soldierpic from '../soldier__pic.png'
import CelebTag from '../BF4_Celebration_Dog_Tag.png'
export const SoldierLook = () => {
  return (
    <div className='soldier-look'>
        <div className='soldier-tags'>
            <img src={PremiumTag} className='premium-dog-tag' alt='premium dog tag'></img>
            <img src={CelebTag} className='bf4-celeb-tag' alt='celebration tag'/>
        </div>
        <img src={Soldierpic} className='soldier-pic' alt="soldier equipped" />
    </div>
  )
}
