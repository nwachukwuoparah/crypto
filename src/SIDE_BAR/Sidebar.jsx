import React from 'react'
import './sidebar.css'



export default function Sidebar(props) {



  return (
    <div className='sidecar_comp'>
      <p className='P'>{props.title}</p>
      <div className='nav_contain'>
        <div className='navs'>{props.icon1}<p>{props.title1}</p></div>
        <div className='navs'>{props.icon2}<p>{props.title2}</p></div>
        {props.title3 && <div className='navs'>{props.icon3}<p>{props.title3}</p></div>}
      </div>
    </div>
  )
}
