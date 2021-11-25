import React from 'react'
import './Contact.css'

function Contact() {
    return (
        <>
            <section id="contact" className="contact textAlignment">
                <h1 className="contact__title">Have Question in mind?
                    Let us help you</h1>
                <form className="contact__form">
                    <input type="text" className="contact__form__email" placeholder="snmonydemo@gmail.com" />
                    <button className="contact__form__button">Send</button>
                </form>
            </section>
        </>
    )
}

export default Contact
