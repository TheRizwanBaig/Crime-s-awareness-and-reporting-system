import React from 'react';
import "./App.css";
import Logo from './Logo.png';
import './Headercss.css';
import {Link} from 'react-router-dom';


const Header =() => {
        return (
                <div className="Headercss">   
                        <center>
                
                                <Link to="/">
                                        <img src={Logo} ></img> 
                                </Link> 
                        </center>
               </div>
        )
    
    
}

export default Header;
