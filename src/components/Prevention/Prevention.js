import React from 'react'
import Row from '../Row/Row'
import './Prevention.css'
let data = [
    {
        id: "1",
        title: 'Wear masks',
        content: 'Continually seize impactful vortals rather than future-proof supply chains. Uniquely exploit emerging niches via fully tested meta-services. Competently pursue standards compliant leadership skills vis-a-vis pandemic "outside the box" thinking. Objectively ',
        leftMargin: '40px',
        image: 'wear_masks',
    },
    {
        id: "2",
        title: 'Wash Your Hands',
        content: 'Continually seize impactful vortals rather than future-proof supply chains. Uniquely exploit emerging niches via fully tested meta-services. Competently pursue standards compliant leadership skills vis-a-vis pandemic "outside the box" thinking. Objectively Continually seize impactful vortals ',
        leftMargin: '48px',
        image: 'wash_your_hands',
    },
    {
        id: "3",
        title: 'Use Nose -  Rag',
        content: 'Continually seize impactful vortals rather than future-proof supply chains. Uniquely exploit emerging niches via fully tested meta-services. Competently pursue standards compliant leadership skills vis-a-vis pandemic "outside the box" thinking. Objectively ',
        leftMargin: '45px',
        image: 'use_nose',
    },
    {
        id: "4",
        title: 'Avoid contacts',
        content: 'Continually seize impactful vortals rather than future-proof supply chains. Uniquely exploit emerging niches via fully tested meta-services. Competently pursue standards compliant leadership skills vis-a-vis pandemic',
        leftMargin: '42px',
        image: 'avoid_contacts',
    },


]
function Prevention() {
    return (
        <>
            <section id="prevention" className="prevention">
                <article className="prevention__description textAlignment">
                    <h2 className="subtitle">Covid-19</h2>
                    <h1 className="title">
                        What  should we do
                    </h1>
                    <p className="prevention__description__content content">
                        Corona viruses are a type of virus. There are many different kinds, and some cause disease. A newly identified type has caused
                    </p>
                </article>
                <section className="prevention__row">
                    {data.map((row) => <Row key={row.id} row={row} />)}
                </section>
                <img src="/images/fourth_virus_half.svg" alt="" className="fourth_virus_half" />
                <img src="/images/fifth_virus.svg" alt="" className="fifth_virus"/>
      <img src="/images/sixth_virus_half.svg" alt="" className="sixth_virus_half"/>
      
            </section>
        </>
    )
}

export default Prevention
