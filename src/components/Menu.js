import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { BiMenu } from 'react-icons/bi';

let Menu = (props) => {

    const [navbar, setNavbar] = useState(false);

    return (
        <div className={props.styleMenu}>
            <div className={`nav ${navbar ? "active" : ""}`}>
                <div className='holderNav'>
                    <Link onClick={() => setNavbar(!navbar)} to="/FatlineTattooClub/">Home</Link>
                    <Link onClick={() => setNavbar(!navbar)} to="/about">About</Link>
                    <Link onClick={() => setNavbar(!navbar)} to="/portfolio">Portfolio</Link>
                    <Link onClick={() => setNavbar(!navbar)} to="/contact">Contact</Link>
                </div>
            </div>
            <div onClick={() => setNavbar(!navbar)} className="burger">
                <p>MENU</p>
                <BiMenu />
            </div>
        </div>
    )
}

export default Menu
