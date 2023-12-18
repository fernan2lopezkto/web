import React from "react";


const Navigation = () => {
    return (
        <>
<section className="smart-scroll" style={{backgroundColor: "rgba(0,0,0,0.9)"}}>
    <div className="container-fluid">
        <nav className="navbar navbar-expand-md navbar-dark">
            <a className="navbar-brand heading-black" href="#home">
                HandSpeak
            </a>
            <button className="navbar-toggler navbar-toggler-right border-0"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarCollapse"
                    aria-controls="navbarCollapse"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                <span data-feather="grid"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link page-scroll" href="#introduccion">Introducción</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link page-scroll" href="#detalles">Detalles</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link page-scroll" href="#PF">PF</a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</section>
    </>
    )
} 

export default Navigation;