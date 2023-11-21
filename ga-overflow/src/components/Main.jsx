import { Route, Routes } from 'react-router-dom'
import Header from './Header'
import Nav from './Nav'
import Home from './Home'
import Footer from './Footer'
import { useState, useEffect } from 'react'
import axios from 'axios'




const Main = () => {

    // const [userData, setUserData] = useState(null)
    // const [updateUser, setUpdateUser] = useState(null)


    return (
     <>
    <div className="main">
        <div className='header-container'>
            <Header/>
            <Nav/>
        </div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            {/* <Route path='/Pizza' element={<Pizza/>}/> */}
        </Routes>
    </div>
    <Footer/>
    </>
)
}





export default Main


