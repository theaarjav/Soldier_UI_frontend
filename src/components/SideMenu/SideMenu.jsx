import React, { useState } from 'react'
import './SideMenu.css'
export const SideMenu = () => {
    const [game1, setGame1] = useState(false);
    const [game2, setGame2] = useState(false);
    const [game3, setGame3] = useState(false);
    const [game4, setGame4] = useState(false);
    const [career, setCareer] = useState(false);
    const [watch, setWatch] = useState(false);
    const [news, setNews] = useState(false);
    const [help, setHelp] = useState(false)
  return (
    <div className='side-menu'>
        <a className='side-menu-game game1' onMouseEnter={()=>setGame1(true)} onMouseLeave={()=>setGame1(false)}>
        {
            game1?<div class="side-menu-popup"><div class="side-menu-text">Battlefield V</div></div>:""
        }
        </a>
        <a className='side-menu-game game2' onMouseEnter={()=>setGame2(true)} onMouseLeave={()=>setGame2(false)}>
        {
            game2?<div class="side-menu-popup"><div class="side-menu-text">Battlefield 1</div></div>:""
        }
        </a>
        
        <a className='side-menu-game game3 current' onMouseEnter={()=>setGame3(true)} onMouseLeave={()=>setGame3(false)}>
        {
            game3?<div class="side-menu-popup"><div class="side-menu-text">Battlefield 4</div></div>:""
        }
        </a>
        <a className='side-menu-game game4' onMouseEnter={()=>setGame4(true)} onMouseLeave={()=>setGame4(false)}>
        {
            game4?<div class="side-menu-popup"><div class="side-menu-text">Battlefield Hardline</div></div>:""
        }
        </a>
        <a className='side-menu-extras e1' onMouseEnter={()=>setCareer(true)} onMouseLeave={()=>setCareer(false)}>
        {
            career?<div class="side-menu-popup"><div class="side-menu-text">Career</div></div>:""
        }
        </a>
        <a className='side-menu-extras vector' onMouseEnter={()=>setWatch(true)} onMouseLeave={()=>setWatch(false)}>
        {
            watch?<div class="side-menu-popup"><div class="side-menu-text">watch</div></div>:""
        }
        </a>
        <a className='side-menu-extras news' onMouseEnter={()=>setNews(true)} onMouseLeave={()=>setNews(false)}>
        {
            news?<div class="side-menu-popup"><div class="side-menu-text">News</div></div>:""
        }
        </a>
        <div className='side-menu__bar'></div>
        <div className='side-menu__help' onMouseEnter={()=>setHelp(true)} onMouseLeave={()=>setHelp(false)}> 
        {
            help?<div class="side-menu-popup"><div class="side-menu-text">Help</div></div>:""
        }
        </div>
        <div className='side-menu__power'></div>
    </div>
  )
}
