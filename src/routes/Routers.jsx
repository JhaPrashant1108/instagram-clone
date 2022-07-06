import React from 'react'
import { Route , Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Explore from '../pages/Explore'
import User from '../pages/User'


function Routers() {
  return (
    <Routes>
        <Route path='/' element = {<Home/>} />
        <Route path='/:username' element = {<User/>} />
        <Route path='/explore/' element = {<Explore/>} />
    </Routes>
  )
}

export default Routers