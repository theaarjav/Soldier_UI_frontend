import React, {useState, useEffect} from 'react'
import './SoldierSelect.css'
import axios from 'axios'
export const SoldierSelect = () => {

    const [select, setSelect] = useState([])
    const getSelect=async ()=>{
        const {data, status}=await axios.get("http://localhost:5000/api/select/1");
        if(status===200){
            console.log(200, select);
            setSelect(data.select);
        }
        console.log(select);
    }
    useEffect(() => {
      getSelect()
    
    }, [])
  return (
    <div className='soldier-select'>
        <div className='soldier-menu-w'>
        <div  href="#" className="soldier-menu w-inline-block" >
            <div class="soldier-menu-h" >weapons</div>
            <div class="soldier-menu-stats">
                <div class="soldier-menu-stats-h" >{select.weapons}/185</div>
                <div class="soldier-menu-stats-bar">
                    <div class="soldier-stats-bar-orange"></div>
                    <div class="soldier-menu-stats-bar-black" style={{backgroundColor: "rgba(16, 16, 16, 0.5)"}}></div>
                </div>
            </div>
        </div>
        </div>
        <div className='soldier-menu-w'>
        <div  href="#" className="soldier-menu w-inline-block" >
            <div class="soldier-menu-h" >kits</div>
            <div class="soldier-menu-stats">
                <div class="soldier-menu-stats-h" >{select.kits}/64</div>
                <div class="soldier-menu-stats-bar">
                    <div class="soldier-stats-bar-orange"></div>
                    <div class="soldier-menu-stats-bar-black" style={{backgroundColor: "rgba(16, 16, 16, 0.5)"}}></div>
                </div>
            </div>
        </div>
        </div>
        <div className='soldier-menu-w'>
        <div  href="#" className="soldier-menu w-inline-block">
            <div class="soldier-menu-h" >vehicles</div>
            <div class="soldier-menu-stats">
                <div class="soldier-menu-stats-h" >{select.vehicles}/182</div>
                <div class="soldier-menu-stats-bar">
                    <div class="soldier-stats-bar-orange"></div>
                    <div class="soldier-menu-stats-bar-black" style={{backgroundColor: "rgba(16, 16, 16, 0.5)"}}></div>
                </div>
            </div>
        </div>
        </div>
        <div className='soldier-menu-w'>
        <div  href="#" className="soldier-menu w-inline-block">
            <div class="soldier-menu-h" >medals</div>
            <div class="soldier-menu-stats">
                <div class="soldier-menu-stats-h" >{select.medals}/54</div>
                <div class="soldier-menu-stats-bar">
                    <div class="soldier-stats-bar-orange"></div>
                    <div class="soldier-menu-stats-bar-black" style={{backgroundColor: "rgba(16, 16, 16, 0.5)"}}></div>
                </div>
            </div>
        </div>
        </div>
        <div className='soldier-menu-w'>
        <div  href="#" className="soldier-menu w-inline-block" >
            <div class="soldier-menu-h" >assignments</div>
            <div class="soldier-menu-stats">
                <div class="soldier-menu-stats-h" >{select.assignments}/110</div>
                <div class="soldier-menu-stats-bar">
                    <div class="soldier-stats-bar-orange"></div>
                    <div class="soldier-menu-stats-bar-black" style={{backgroundColor: "rgba(16, 16, 16, 0.5)"}}></div>
                </div>
            </div>
        </div>
        </div>
        <div className='soldier-menu-w'>
        <div  href="#" className="soldier-menu w-inline-block" >
            <div class="soldier-menu-h" >dog tags</div>
            <div class="soldier-menu-stats">
                <div class="soldier-menu-stats-h" >{select.dog_tags}/720</div>
                <div class="soldier-menu-stats-bar">
                    <div class="soldier-stats-bar-orange"></div>
                    <div class="soldier-menu-stats-bar-black" style={{backgroundColor: "rgba(16, 16, 16, 0.5)"}}></div>
                </div>
            </div>
        </div>
        </div>
        <div className='soldier-menu-w'>
        <div  href="#" className="soldier-menu w-inline-block" >
            <div class="soldier-menu-h" >battlepacks</div>
        </div>
        </div>
    </div>
  )
}
