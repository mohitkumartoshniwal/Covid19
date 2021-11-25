import React from 'react'
import './HeroSection.css'

function HeroSection() {
    return (
        <>
            <section className="hero">
                <img src='/images/hero.svg' alt="" className="hero__image" />

                <article className="hero__description textAlignment">
                    <h2 className="hero__description__subtitle ">COVID-19 Alert</h2>
                    <h1 className="hero__description__title">
                        Stay at Home quarantine
                        To stop Corona virus</h1>
                    <p className="hero__description__content">
                        There is no specific medicine to prevent or treat coronavirus disease (COVID-19). People may need supportive care to .
                    </p>
                    <button className="primary_button primary_button--hero">Let Us Help</button>
                </article>
            </section>
        </>
    )
}

export default HeroSection
