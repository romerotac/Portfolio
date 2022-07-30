import React from 'react'
import {Link} from "react-router-dom";

function Navbar() {
    
    return (
        <>
        <div className='menu'>
            <div className='nav'>
            <ul>
                <li><Link to = "/"> Home </Link></li>
                <li><Link to = "/about">About</Link></li>
                <li><Link to = "/projects">Projects</Link></li>
            </ul>
            </div>
        </div>
        </>
    );
  }

export default Navbar;
