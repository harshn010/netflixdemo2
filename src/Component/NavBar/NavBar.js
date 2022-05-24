import React from 'react'
import  './NavBar.css'

function NavBar(props) {
    
  return (
    <div className='navbar'>  
    <img  className='image' src={props.pic}  />
    </div>
  
  )
}

export default NavBar;