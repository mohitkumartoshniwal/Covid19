import React from 'react'
import './NavBar.css';

function NavBar() {
    return (
        <>
            <div className="container nav-bar">
                <div className="logo">
                    <img src='/images/logo.svg' alt="" className="logo__image" />
                    <div className="logo__text">COVID - 19</div>
                </div>
                <nav className="nav_menu">
                    <a href="#overview" className="nav_menu__link">Overview</a>
                    <a href="#contagion" className="nav_menu__link">Contagion</a>
                    <a href="#symptoms" className="nav_menu__link">Symptoms</a>
                    <a href="#prevention" className="nav_menu__link">Prevention</a>
                    <button className="primary_button--nav">Contact</button>
                </nav>
            </div>
        </>

    )
}

export default NavBar
