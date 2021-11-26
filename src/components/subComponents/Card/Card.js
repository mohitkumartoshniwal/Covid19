import React from 'react'
import './Card.css'


function Card({ card }) {
    return (
        <article className="card textAlignment">
            <img src={`/images/${card.image}.svg`} alt="" className="card__image" />
            <h1 className="card__title">{card.title}</h1>
            <p className="card__content content">{card.content}</p>
        </article>
    )
}

export default Card
