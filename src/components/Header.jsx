import React from 'react'
import './styles/Header.css'
import { NavLink } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'

function Header() {

  return (
    <div className='header'>
      <div className='header-container'>
        <NavLink className='header-logo' to={'/'} >InstaClone</NavLink>
        <div className='header-searchbar' >
          <form>
            <FaSearch style={ {color: "rgb(197, 197, 197)", fontSize: "1rem" , fontWeight:"100" } } />
            <input type="text" placeholder='Search' />
          </form>
        </div>

      </div>


    </div>
  )
}

export default Header