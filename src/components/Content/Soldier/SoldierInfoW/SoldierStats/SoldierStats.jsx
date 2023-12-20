import React, { useEffect, useState } from 'react'
import Tank from './images/soldier__tank-white.png'
import TankB from './images/tank-black.png'
import ACWR from './images/acw-white.png'
import ACWRB from './images/acwr-black.png'
import ENG from './images/engineer-white.png'
import ENGB from './images/eng-black.svg'
import M9 from './images/m9-white.png'
import M9B from './images/m9-black.png'
import axios from 'axios'
import './SoldierStats.css'
export const SoldierStats = () => {

    const [tankHover, setTankHover] = useState(false);
    const [acwrHover, setacwrHover] = useState(false);
    const [engHover, setengHover] = useState(false);
    const [m9Hover, setm9Hover] = useState(false);
    const [stat, setstat] = useState([])
    const getStat=async ()=>{
        const {data, status}=await axios.get("https://fog-ui-frontend.onrender.com/api/stats/1");
        if(status===200){
            // console.log(200, stat);
            setstat(data.stat);
        }
        // console.log(stat);
    }
    useEffect(() => {
      getStat()
    
    }, [])
    
  return (
    <div className='soldier-stats'>
        <div className='soldier-stats-primary'>
            <div className='single-stat-primary'>
                <div className='stat-name'>Wins</div>
                <div className='stat-review'>{stat.winPer}%</div>
            </div>
            <div className='single-stat-primary'>
                <div className='stat-name'>SCORE/MIN</div>
                <div className='stat-review'>{stat.ScoreperMin}</div>
            </div>
            <div className='single-stat-primary'>
                <div className='stat-name'>KILLS/MIN</div>
                <div className='stat-review'>{stat.killsperMin}</div>
            </div>
        </div>
        <div className='soldier-stats-game'>
            <a className='single-stat-weapon' onMouseEnter={()=>setTankHover(true)} onMouseLeave={()=>setTankHover(false)}>
                <div className='weapon-stat-accessory'>
                    Top Vehicle
                </div>
                <div className='weapon-stat-info'>
                    <div className='weapon-stat-name'>{stat.topVehicle}</div>
                    <div className='weapon-stat-desc'>{stat.vehicleKill} Kills</div>
                </div>
                {
                    tankHover?<img src={TankB} className='soldier-tank-white'/>:
                    <img src={Tank} className='soldier-tank-white'/>

                }
            </a>
            <a className='single-stat-weapon' onMouseEnter={()=>setacwrHover(true)} onMouseLeave={()=>setacwrHover(false)}>
                <div className='weapon-stat-accessory'>
                    Top Primary
                </div>
                <div className='weapon-stat-info'>
                    <div className='weapon-stat-name'>{stat.topPrimary}</div>
                    <div className='weapon-stat-desc'>{stat.primaryKill} Kills</div>
                </div>
                {
                    acwrHover?<img src={ACWRB} className='soldier-acwr-white'/>:
                    <img src={ACWR} className='soldier-acwr-white'/>

                }
            </a>
            <a className='single-stat-weapon' onMouseEnter={()=>setengHover(true)} onMouseLeave={()=>setengHover(false)}>
                <div className='weapon-stat-accessory'>
                    Top Class
                </div>
                <div className='weapon-stat-info'>
                    <div className='weapon-stat-name'>{stat.topClass}</div>
                    <div className='weapon-stat-desc'>{stat.classKill} score</div>
                </div>
                {
                    engHover?<img src={ENGB} className='soldier-eng-white'/>:
                    <img src={ENG} className='soldier-eng-white'/>

                }
            </a>
            <a className='single-stat-weapon' onMouseEnter={()=>setm9Hover(true)} onMouseLeave={()=>setm9Hover(false)}>
                <div className='weapon-stat-accessory'>
                    Top Sidearm
                </div>
                <div className='weapon-stat-info'>
                    <div className='weapon-stat-name'>{stat.topSidearm}</div>
                    <div className='weapon-stat-desc'>{stat.sidearmKill} Kills</div>
                </div>
                {
                    m9Hover?<img src={M9B} className='soldier-m9-white'/>:
                    <img src={M9} className='soldier-m9-white'/>

                }
            </a>
        </div>
    </div>
  )
}
