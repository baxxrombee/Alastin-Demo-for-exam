import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { SlBag } from "react-icons/sl";



const Nav = () => {
    return (
        <div className="navbar">
            <div className="navbar_wrapper">
                <Link to='/'><img style={{ width: "160px", height: "36px" }} src="https://alastin.com/cdn/shop/files/alastin_logo_299a0da3-bcb6-4cf6-9bef-c799ad7d5b08_200x.png?v=1614293154" alt="" /></Link>
                <ul className="nav_links">
                    <li><Link className='nav_link' to='./shopSkincare'>Shop Skincare </Link></li>
                    <li><Link className='nav_link' to='./rountineBuilder'>Rountine Builder</Link></li>
                    <li><Link className='nav_link' to='./skinScience'>Skin Science </Link></li>
                    <li><Link className='nav_link' to='https://alastin.com/pages/about-us'>About</Link></li>
                </ul>
                <div className="nav_icons">
                    <CiSearch style={{ width: "25px", height: "25px", cursor: "pointer" }} />
                    <CiUser style={{ width: "25px", height: "25px", cursor: "pointer" }} />
                    <Link to='/magazin/:id'><SlBag style={{ width: "25px", height: "25px", cursor: "pointer" }} /></Link>
                </div>
            </div>
        </div>
    )
}

export default Nav