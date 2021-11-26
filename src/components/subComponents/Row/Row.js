import React from 'react'
import './Row.css'
function Row({ row }) {
    return (
        <section className={`single-row ${row.id % 2 === 0 ? 'normal-row' : 'reversed-row'}`}>
            <img src={`/images/${row.image}.svg`} alt="" className="row__image" />

            <div className="row__text">
                <div className="row__text__title">
                    <div className="row__text__title__number">{row.id.padStart(2, '0')}</div>
                    <h1 className="row__text__title__content">{row.title}</h1>
                </div>
                <p className="row__text__content content">{row.content}</p>
            </div>

        </section>
    )
}

export default Row
