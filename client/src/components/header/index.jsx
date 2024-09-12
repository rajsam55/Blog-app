import React from 'react'
import { Link } from 'react-router-dom'





const Header = ()=>{
  return (
  
    <div className = "header">
    <h3>Mern Blog</h3>
    
    <div className = "link">

    <Link className = "links" to = "/"><h3>Home</h3></Link>
    <Link className = "links" to = "/add-new"><h3>Add New</h3></Link>
    
    
    
    
    </div>
        
    
    </div>
  
  )
}

export default Header