import React from "react";

let ContactForm = () => {
    return (
        <div id="container">
            <h1>&bull; Keep in Touch &bull;</h1>
            <div class="underline"></div>
            <div class="icon_wrapper">
                <h1>電話</h1>
            </div>
            <form action="#" method="post" id="contact_form">
                <div class="name">
                    <label for="name"></label>
                    <input type="text" placeholder="NOM" name="name" id="name_input" required />
                </div>
                <div class="email">
                    <label for="email"></label>
                    <input type="email" placeholder="ADRESSE MAIL" name="email" id="email_input" required />
                </div>
                <div class="telephone">
                    <label for="name"></label>
                    <input type="text" placeholder="TELEPHONE" name="telephone" id="telephone_input" required />
                </div>
                <div class="message">
                    <label for="message"></label>
                    <textarea name="message" placeholder="VOTRE PROJET" id="message_input" cols="30" rows="5" required></textarea>
                </div>
                <div class="submit">
                    <input type="submit" value="ENVOYER" id="form_button" disabled/>
                </div>
            </form>
            <p>3 RUE BERTHELOT - 33000 BORDEAUX</p>
        </div>
    )
}

export default ContactForm