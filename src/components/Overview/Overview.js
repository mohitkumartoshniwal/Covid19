import React from 'react'
import './Overview.css'

function Overview() {
    return (
        <>


            <section id="overview" className="overview">
                <img src='/images/overview.svg' alt="" className="overview_image" />

                <article className="overview__description">
                    <h2 className="subtitle"> What Is Covid-19</h2>
                    <h1 className="title">
                        Coronavirus</h1>
                    <p className="overview__description__content">
                        Corona viruses are a type of virus. There are many different kinds, and some cause disease. A newly identified type has caused a recent outbreak of respiratory illness now called COVID-19.Lauren Sauer, M.S., the director of operations with the Johns Hopkins Office of Critical Event Preparedness and Response
                    </p>
                    <button className="primary_button primary_button--overview">Learn More</button>
                </article>
            <img src="/images/first_virus_half.svg" alt="" className="first_virus_half" />
            <img src="/images/second_virus.svg" alt="" className="second_virus" />
            </section>

        </>
    )
}

export default Overview
