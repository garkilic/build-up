import React from "react"

export default function Nav() {
    return (
        <header className="container container--flex">
            <div className="navbar">
                    <div>
                        <h2 className="navbar--title">Simple Fitness</h2>
                    </div>

                    <nav>
                        <ul className="navbar--items">
                            <li><a href="#">About</a></li>
                            <li><a href="#">Process</a></li>
                            <li><a href="#">Pricing</a></li>
                            <li className="navbar--signup"><a href="#">Sign Up</a></li>
                        </ul>
                       
                    </nav>
            </div>
        </header>
            
    )
        
    
    
}

