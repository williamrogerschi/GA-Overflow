import React, { useState } from "react"
import { Link } from "react-router-dom"
import SearchBar from "./SearchBar"

const Nav = () => {




return (
  <>
    <div className="navbar">
      <Link className="nav-a" to='/'>
        <img height='40px' width='40px' src="../../public/ga.png"/>
      </Link>
      <SearchBar/>
      <Link className="nav-a" to="/">
        <img height='40px' width='40px' src="../../public/setting.png"/>
      </Link>
      <Link className="nav-a" to="/">
        <img height='40px' width='40px' src='../../public/messenger.png'/>
      </Link>
      <Link className="nav-a" to="/">
        <img height='40px' width='40px' src='../../public/add-group.png'/>
      </Link>
    </div>
  </>
  )
}


export default Nav