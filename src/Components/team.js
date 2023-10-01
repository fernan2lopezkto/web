import React from "react";
import Bubbles from "./Bubble";

import renzo from "../static/img/renzo-yaques-4s.jpg"
import joaco from "../static/img/Joaquin Furtado 3s.jpg"
import mauri from "../static/img/Mauricio_De_Betolaza_2s.jpg"
import juan from "../static/img/juan_rey_3s.jpg"

import ln from "../static/icons/icon-linkedin.png"
import gh from "../static/icons/icon-github.png"

const Team = () => {
    return (
        <>
        <Bubbles />
            <section class="container col-md-8">

<div class="py-2 team4">
  <div class="container">
    <div class="row justify-content-center mb-4">
      <div class="col-md-7 text-center">
        <h3 class="mb-3 text-primary">Equipo de trabajo</h3>
        <h6 class="subtitle">  </h6>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-3 mb-4">
        <div class="row">
          <div class="col-md-12">
            <img src={renzo} alt="wrapkit" class="img-fluid rounded-circle" />
          </div>
          <div class="col-md-12 text-center">
            <div class="pt-2">
              <h5 class="mt-4 font-weight-medium mb-0">Renzo Yaques</h5>
              <h6 class="subtitle mb-3">IA developer</h6>
              
                <ul class="list-inline">

                <li class="list-inline-item">
                <a title="linkedin" href="https://www.linkedin.com/in/renzo-yaques-b36456253/" target="_blank" rel="noreferrer"><img src={ln} alt="Linkedin" style={{width: '30px'}} class="text-decoration-none d-block px-1" /></a>
                </li>
                <li class="list-inline-item">
                <a title="github" href="https://github.com/Sapitorico" target="_blank" rel="noreferrer"><img src={gh} alt="Github" style={{width: '30px'}} class="text-decoration-none d-block px-1" /></a>
                </li>

              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-3 mb-4">
        <div class="row">
          <div class="col-md-12">
            <img src={joaco} alt="wrapkit" class="img-fluid rounded-circle" />
          </div>
          <div class="col-md-12 text-center">
            <div class="pt-2">
              <h5 class="mt-4 font-weight-medium mb-0">Joaquin Furtado</h5>
              <h6 class="subtitle mb-3">Backend developer</h6>

              <ul class="list-inline">

            <li class="list-inline-item">
            <a title="linkedin" href="http://www.linkedin.com" target="_blank" rel="noreferrer"><img src={ln} alt="Linkedin" style={{width: '30px'}} class="text-decoration-none d-block px-1" /></a>
            </li>
            <li class="list-inline-item">
            <a title="github" href="https://github.com/JoaquinFurta" target="_blank" rel="noreferrer"><img src={gh} alt="Github" style={{width: '30px'}} class="text-decoration-none d-block px-1" /></a>
            </li>

              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-3 mb-4">
        <div class="row">
          <div class="col-md-12">
            <img src={mauri} alt="wrapkit" class="img-fluid rounded-circle" />
          </div>
          <div class="col-md-12 text-center">
            <div class="pt-2">
              <h5 class="mt-4 font-weight-medium mb-0">Mauricio De Betolaza</h5>
              <h6 class="subtitle mb-3">Frontend developer</h6>


              <ul class="list-inline">

                <li class="list-inline-item">
                <a title="linkedin" href="https://www.linkedin.com/in/mauricio-de-betolaza-del-puerto-24464a265/" target="_blank" rel="noreferrer"><img src={ln} alt="Linkedin" style={{width: '30px'}} class="text-decoration-none d-block px-1" /></a>
                </li>
                <li class="list-inline-item">
                <a title="github" href="https://github.com/Maurlcio" target="_blank" rel="noreferrer"><img src={gh} alt="Github" style={{width: '30px'}} class="text-decoration-none d-block px-1" /></a>
                </li>

              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-3 mb-4">
        <div class="row">
          <div class="col-md-12">
            <img src={juan} alt="wrapkit" class="img-fluid rounded-circle" />
          </div>
          <div class="col-md-12 text-center">
            <div class="pt-2">
              <h5 class="mt-4 font-weight-medium mb-0">Juan Rey</h5>
              <h6 class="subtitle mb-3">Frontend developer</h6>


              <ul class="list-inline">

                <li class="list-inline-item">
                <a title="linkedin" href="https://www.linkedin.com/in/juan-rey-a34897255/" target="_blank" rel="noreferrer"><img src={ln} alt="Linkedin" style={{width: '30px'}} class="text-decoration-none d-block px-1" /></a>
                </li>
                <li class="list-inline-item">
                <a title="github" href="https://github.com/fernan2lopezkto" target="_blank" rel="noreferrer"><img src={gh} alt="Github" style={{width: '30px'}} class="text-decoration-none d-block px-1" /></a>
                </li>

              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</div>
            </section>
        </>
    )
}

export default Team;