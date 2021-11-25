import React from 'react'
import './Symptoms.css'


function Symptoms() {
    return (
        <>
            <section id="symptoms" className="symptoms ">
                <article className="symptoms__description textAlignment">
                    <h2 className="subtitle">Covid-19</h2>
                    <h1 className="title">
                        Symptoms
                    </h1>
                    <p className="symptoms__description__content content">
                        Corona viruses are a type of virus. There are many different kinds, and some cause disease. A newly identified type has caused a recent outbreak of respiratory
                    </p>
                    <img src='/images/symptoms.svg' alt="" className="symptoms__image" />
                </article>
                <img src="/images/left_leaf.svg" alt="" className="left_leaf" />
                <img src="/images/right_leaf.svg" alt="" className="right_leaf" />
            </section>
        </>
    )
}

export default Symptoms
