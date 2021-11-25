import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <footer>
            <div className="footer-container ">
                <div className="logo_with_nav">
                    <div className="logo-flex">
                        <img src='/images/logo.svg' alt="" className="logo__image" />
                        <div className="logo__text">COVID - 19</div>
                    </div>
                    <nav className="footer_nav_menu footer-flex">
                        <a href="#overview" className="footer_nav_menu__link">Overview</a>
                        <a href="#symptoms" className="footer_nav_menu__link">Symptoms</a>
                        <a href="#prevention" className="footer_nav_menu__link">Prevention</a>
                        <a href="#prevention" className="footer_nav_menu__link">Treatment</a>
                    </nav>
                </div>
                <div className="social_icons">
                    <button className="facebook">
                        <img src="/images/facebook.svg" alt="" />
                    </button>
                    <button className="youtube">
                        <img src="/images/youtube.svg" alt="" />
                    </button>
                    <button className="vimeo">
                        <img src="/images/vimeo.svg" alt="" />
                    </button>
                    <button className="twitter">
                        <img src="/images/twitter.svg" alt="" />
                    </button>
                </div>
            </div>
            <small className="copyright ">2020 @ All rights reserved by pixelspark.co</small>

        </footer>
    )
}

export default Footer
