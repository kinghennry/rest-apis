import React from 'react'
// import "../css/Navbar.css"
import {Link} from "react-router-dom"
function Navbar() {
    return (
    <>
    <header className="header">            
        <div>
            <Link to="/">
                <h1>Where in the world ?</h1>
            </Link>
        </div>
      </header>
    </>
    )
}

export default Navbar
