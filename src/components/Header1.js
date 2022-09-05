import React from 'react'
import { Link } from 'react-router-dom'
import { FaUser } from "react-icons/fa";

const fastyle={fontSize: '25px',backgroundColor:'white',borderRadius:'15px',padding:'2px'}
const Header1 = () => {
  return (
    <header className="header">
        <div>
            <Link className="links" to='/logged' >Home</Link>
        </div>
        <nav className="navbar">
            <ul>
                <Link className="links" to='/gallery' >Gallery</Link>
            </ul>
        </nav>
        <nav className="navbar">
            <ul className='logout'>
                <ul>
                    <Link className="links" to='/' >LogOut</Link>
                </ul>
                <ul>
                    <a href='/account'><FaUser style={fastyle}/></a>
                </ul>
            </ul>
        </nav>
    </header>
  )
}

export default Header1