import React, { useState } from "react"
import { Link } from "react-router-dom"
import SearchBar from "./searchBar"

const Nav = () => {




return (
    <div className="navbar">

      <Link className="nav-a" to='/'>GA Overflow </Link>
      <SearchBar/>
      <Link className="nav-a" to="/"> Settings </Link>
      <Link className="nav-a" to="/"> Groups </Link>
    </div>
  )
}


export default Nav