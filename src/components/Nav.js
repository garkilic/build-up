import React from "react"
import "../style.css"
import {Routes, Route, Link} from "react-router-dom"

export default function Nav() {
    return (
        <header className="container container--flex">
            <div className="navbar">
                    <div>
                        <h2 className="navbar--title">Build Up</h2>
                    </div>

                    <nav>
                        <ul className="navbar--items">
                            <Link to="/Tes"></Link>
                            <li><a href="#about">About</a></li>
                            <li><a href="#pricing">Pricing</a></li>
                            <li><a href="mailto:tryagainlabs@gmail.com" target="_blank" rel="noopener noreferrer">Contact</a></li>
                            <li className="navbar--signup"><a href="#about">Sign Up</a></li>
                        </ul>
                       
                    </nav>
            </div>
        </header>
            
    )
        
    
    
}

