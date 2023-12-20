import React, {useEffect, useState} from 'react'
import axios from 'axios'
import './SoldierLevel.css'
import LevelImage from './home__level-icon.png'
export const SoldierLevel = () => {
  const [user, setUser] = useState([])
    const getUser=async ()=>{
        const {data, status}=await axios.get("https://fog-ui-frontend.onrender.com/api/user/1");
        if(status===200){
            // console.log(200, user);
            setUser(data.user);
        }
        // console.log(user);
    }
    useEffect(() => {
      getUser()
  
    }, [])
  return (
    <div className='soldier-level-info'>

      <div className='soldier-level'>
        <div className='soldier-level-bar'></div>
        <img src={LevelImage} loading='eager' className='soldier-level-icon' />
      </div>
      <div className='soldier-level-info-block'>

        <div className='soldier-level-info-h'>{user.name}</div>
        <div className='soldier-level-stats'>
          <div className='soldier-level-no'>
            <div className='soldier-level-text'>{user.level}</div>
          </div>
          <div className='soldier-level-current'>{user.score}/110,110</div>
          <div className='soldier-level-estimate'>- Estimated rank up in 1h</div>
        </div>
      </div>
    </div>
  )
}
