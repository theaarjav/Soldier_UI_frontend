import React, { useState } from 'react'
import './Invite.css'
import SquadLogo from './images/squad.png'
import OnlineInd from './images/online.png'
import OfflineInd from './images/offline.png'
import Friend1Pic from './images/friend profile pic.png'
import Friend2Pic from './images/friend profile pic (1).png'
import Join from './images/join.png'
export const Invite = () => {
    const [inviteHover, setInviteHover] = useState(false)
    const [squadHover, setSquadHover] = useState(false)
  return (
    <div className='invite' onMouseEnter={()=>setInviteHover(true)} onMouseLeave={()=>setInviteHover(false)}>
        {inviteHover?<div className='invite-line'></div>:""}
        <div className='invite-squad'>
            <div className='squad-icon'>
                <img src="https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/601ab15999e303e7c202c28c_squad.svg" loading='lazy' alt className='invite-squad-icon'/>
                {inviteHover?<div className='invite-squad-text'>SQUAD</div>:""}
            </div>
            <div className='invite-join' onMouseEnter={()=>setSquadHover(true)} onMouseLeave={()=>setSquadHover(false)}>
                {
                    squadHover?
                    <img src={"https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/601ab1596100550691c84f76_home__join-black.svg"} loading='lazy' alt className='invite-join-icon'/>
                    :
                    <img src={"https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/601ab158769fa828e95f98df_home__join-default.svg"} loading='lazy' alt className='invite-join-icon invite-join-icon-default'/>
               
                }
                {inviteHover?
                    
                        <div className='invite-join-squad-text'>squad join</div>
                    :
                    ""
                }
            </div>
        </div>
        {inviteHover?<div className='invite-line'></div>:""}
        <div className='invite-online'>
            <div className='online-icon'>
                <img src={OnlineInd} loading='lazy' alt className='invite-online-icon'/>
                {inviteHover?<div className='invite-online-text'>online</div>:""}
            </div>
            <div className='invite-online-friend'>
                <div className='online-friend-line'></div>
                <img src={"https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/601ab1585908791f051d4af4_home__friend-picture-MaryJane.png"} loading='lazy' alt className='invite-online-friend-icon'/>
                {
                    inviteHover?
                <div className='invite-online-friend-info'>
                    <div className='invite-friend-name' >Mary Jane</div>
                    <div className='invite-friend-status'>Online</div>
                </div>:""
                }
            </div>
        </div>
        {inviteHover?<div className='invite-line'></div>:""}
        <div className='invite-online'>
            <div className='online-icon'>
                <img src={OfflineInd} loading='lazy' alt className='invite-online-icon'/>
                {inviteHover?<div className='invite-online-text'>offline</div>:""}
            </div>
            <div className='invite-offline-friend' >
                <div className='offline-friend-line'></div>
                <img src={"https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/601ab1583424fd3ddf23a848_home__friend-picture-420.png"} loading='lazy' alt className='invite-online-friend-icon'/>
                {
                    inviteHover?
                <div className='invite-online-friend-info'>
                    <div className='invite-friend-name' >420</div>
                    <div className='invite-friend-status'>Offine</div>
                </div>:""

                }
            </div>
        </div>
        
    </div>
  )
}
