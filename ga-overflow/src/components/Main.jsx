import { Route, Routes } from 'react-router-dom'
import Nav from './Nav'
import Home from './Home'
import { useState, useEffect } from 'react'
import axios from 'axios'




const Main = () => {

    // const [userData, setUserData] = useState(null)
    // const [updateUser, setUpdateUser] = useState(null)


    return (
     <>
    <div className="main">
        <div className='header-container'>
            <Nav/>
        </div>
        <Routes>
            <Route path='/' element={<Home/>}/>
        </Routes>
    </div>
    </>
)
}





export default Main


