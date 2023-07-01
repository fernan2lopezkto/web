import React from "react";

import renzo from "../static/img/Renzo_Yaques.jpg"
import joaco from "../static/img/Joaquin_Furtado.jpg"
import mauri from "../static/img/Mauricio_De_Betolaza.jpg"
import juan from "../static/img/Juan_Rey.jpg"

const Team = () => {
    return (
        <>
            <section class="container col-md-8">

<div class="py-5 team4">
  <div class="container">
    <div class="row justify-content-center mb-4">
      <div class="col-md-7 text-center">
        <h3 class="mb-3">Equipo</h3>
        <h6 class="subtitle">  </h6>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-3 mb-4">
        <div class="row">
          <div class="col-md-12">
            <img src={renzo} alt="wrapkit" class="img-fluid rounded-circle" />
          </div>
          <div class="col-md-12 text-center">
            <div class="pt-2">
              <h5 class="mt-4 font-weight-medium mb-0">Renzo Yaques</h5>
              <h6 class="subtitle mb-3">IA developer</h6>
              <p>- Python</p>
              <p>- Tensorflow</p>
                 <ul class="list-inline">
                <li class="list-inline-item"><a href="#" class="text-decoration-none d-block px-1"><i class="icon-social-facebook"></i></a></li>
                <li class="list-inline-item"><a href="#" class="text-decoration-none d-block px-1"><i class="icon-social-twitter"></i></a></li>
                <li class="list-inline-item"><a href="#" class="text-decoration-none d-block px-1"><i class="icon-social-instagram"></i></a></li>
                <li class="list-inline-item"><a href="#" class="text-decoration-none d-block px-1"><i class="icon-social-behance"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-3 mb-4">
        <div class="row">
          <div class="col-md-12">
            <img src={joaco} alt="wrapkit" class="img-fluid rounded-circle" />
          </div>
          <div class="col-md-12 text-center">
            <div class="pt-2">
              <h5 class="mt-4 font-weight-medium mb-0">Joaquin Furtado</h5>
              <h6 class="subtitle mb-3">Backend developer</h6>
              <p>- Pyton</p>
              <p>- Nodejs</p>
              <ul class="list-inline">
                <li class="list-inline-item"><a href="#" class="text-decoration-none d-block px-1"><i class="icon-social-facebook"></i></a></li>
                <li class="list-inline-item"><a href="#" class="text-decoration-none d-block px-1"><i class="icon-social-twitter"></i></a></li>
                <li class="list-inline-item"><a href="#" class="text-decoration-none d-block px-1"><i class="icon-social-instagram"></i></a></li>
                <li class="list-inline-item"><a href="#" class="text-decoration-none d-block px-1"><i class="icon-social-behance"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-3 mb-4">
        <div class="row">
          <div class="col-md-12">
            <img src={mauri} alt="wrapkit" class="img-fluid rounded-circle" />
          </div>
          <div class="col-md-12 text-center">
            <div class="pt-2">
              <h5 class="mt-4 font-weight-medium mb-0">Mauricio De Betolaza</h5>
              <h6 class="subtitle mb-3">Frontend developer</h6>
              <p>Nodejs</p>
              <p>Electon</p>
              <ul class="list-inline">
                <li class="list-inline-item"><a href="#" class="text-decoration-none d-block px-1"><i class="icon-social-facebook"></i></a></li>
                <li class="list-inline-item"><a href="#" class="text-decoration-none d-block px-1"><i class="icon-social-twitter"></i></a></li>
                <li class="list-inline-item"><a href="#" class="text-decoration-none d-block px-1"><i class="icon-social-instagram"></i></a></li>
                <li class="list-inline-item"><a href="#" class="text-decoration-none d-block px-1"><i class="icon-social-behance"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-3 mb-4">
        <div class="row">
          <div class="col-md-12">
            <img src={juan} alt="wrapkit" class="img-fluid rounded-circle" />
          </div>
          <div class="col-md-12 text-center">
            <div class="pt-2">
              <h5 class="mt-4 font-weight-medium mb-0">Juan Rey</h5>
              <h6 class="subtitle mb-3">Frontend developer</h6>
              <p>React</p>
              <p>Electron</p>
              <ul class="list-inline">
                <li class="list-inline-item"><a href="#" class="text-decoration-none d-block px-1"><i class="icon-social-facebook"></i></a></li>
                <li class="list-inline-item"><a href="#" class="text-decoration-none d-block px-1"><i class="icon-social-twitter"></i></a></li>
                <li class="list-inline-item"><a href="#" class="text-decoration-none d-block px-1"><i class="icon-social-instagram"></i></a></li>
                <li class="list-inline-item"><a href="#" class="text-decoration-none d-block px-1"><i class="icon-social-behance"></i></a></li>
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