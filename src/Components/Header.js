import React from "react";
import Bubbles from "./Bubble";

const Header = () => {
    return (
    <section  id="home">
        <Bubbles />
        <div class="container">
            <div class="row vh-md-100">
                <div class="col-md-8 col-sm-10 col-12 mx-auto my-auto text-center">
                    <h1 class="heading-black text-capitalize text-primary">HandSpeak</h1>
                    <p class="lead py-3 text-muted">Convierte las manos en palabras con nuestra app de interpretacion de lengua de señas
                    en tiempo real, impulsada por inteligencia artificial. ¡Comunícate sin barreras y descubre una nueva
                    forma de conectarte con el mundo</p>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Header;