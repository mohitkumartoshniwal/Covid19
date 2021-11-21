import React from 'react'
import Card from '../Card/Card'
import './Contagion.css'

let data = [
    {
        id: 1,
        title: 'Air Transmission',
        content: 'Objectively evolve tactical expertise before extensible initiatives. Efficiently simplify',
        image: 'air-transmission'
    },
    {
        id: 2,
        title: 'Human Contacts',
        content: 'Washing your hands is one of thesimplest ways you can protect',
        image: 'human-contacts'
    },
    {
        id: 3,
        title: 'Containted Objects',
        content: 'Use the tissue while sneezing,In this way, you can protect your droplets.',
        image: 'containted-objects'
    },
]
function Contagion() {
    return (
        <>
            <section id="contagion" className="contagion">
                <article className="contagion__description">
                    <h2 className="subtitle">Covid-19</h2>
                    <h1 className="title">
                        Contagion
                    </h1>
                    <p className="contagion__description__content content">
                        Corona viruses are a type of virus. There are many different kinds, and some cause disease. A newly identified type
                    </p>
                </article>

                <section className="contagion__card">
                    {data.map((card) => <Card key={card.id} card={card} />)}
                </section>
            </section>
        </>
    )
}

export default Contagion
