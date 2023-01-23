import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='header'>
        <div className='headerLeft'>
            <Link to='/'><img className='header_icon' src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png' /></Link>
            <Link to='/movies/popular'><span>Popular</span></Link>
            <Link to='/movies/top_rated'><span>Top Rated</span></Link>
            <Link to='/movies/upcoming'><span>Up Comming</span></Link>
        </div>
      
    </div>
  )
}

export default Header
