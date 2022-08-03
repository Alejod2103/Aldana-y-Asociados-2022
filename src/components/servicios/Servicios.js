import React from 'react'
import service1 from '../../river/river1.jpg';
import service2 from '../../river/river2.jpg';
import service3 from '../../river/river3.jpg';
import service4 from '../../river/river4.jpg';
import service5 from '../../river/river5.jpg';
import service6 from '../../river/river6.jpg';

const Servicios = () => {
  return (
    <>
    <div class="container-fluid py-5">
        <div class="container py-5">
            <div class="row justify-content-center">
                <div class="col-lg-6 col-md-8 col text-center mb-4">
                    <h6 class="text-primary font-weight-normal text-uppercase mb-3">Nuestros Servicios</h6>
                    <h1 class="mb-4">Así te ayudamos a potenciar tu negocio</h1>
                </div>
            </div>
            <div class="row">
                <div class="col-12 text-center mb-2">
                    <ul class="list-inline mb-4" id="portfolio-flters">
                        <li class="btn btn-outline-primary m-1 active" data-filter=".first">Auditorías</li>
                        <li class="btn btn-outline-primary m-1 active" data-filter=".second">Contabilidad</li>
                        <li class="btn btn-outline-primary m-1 active" data-filter=".third">Impuestos</li>
                        <li class="btn btn-outline-primary m-1 active" data-filter=".third">Servicios</li>
                    </ul>
                </div>
            </div>
            <div class="row mx-1 portfolio-container">
                <div class="col-lg-4 col-md-6 col-sm-12 p-0 portfolio-item first">
                    <div class="position-relative overflow-hidden">
                        <div class="portfolio-img d-flex align-items-center justify-content-center">
                            <img class="img-fluid" src={service1} alt="none" />
                        </div>
                        <div class="portfolio-text bg-secondary d-flex flex-column align-items-center justify-content-center">
                            <h4 class="text-white mb-4">Preparador de impuestos</h4>
                            <div class="d-flex align-items-center justify-content-center">
                            <a class="btn btn-outline-primary m-1" href="none">
                                  <h3>Contactenos Hoy!</h3>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12 p-0 portfolio-item second">
                    <div class="position-relative overflow-hidden">
                        <div class="portfolio-img d-flex align-items-center justify-content-center">
                            <img class="img-fluid" src={service2} alt="none" />
                        </div>
                        <div class="portfolio-text bg-secondary d-flex flex-column align-items-center justify-content-center">
                            <h4 class="text-white mb-4">Contabilidad para negocio</h4>
                            <div class="d-flex align-items-center justify-content-center">
                            <a class="btn btn-outline-primary m-1" href="none">
                                  <h3>Contactenos Hoy!</h3>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12 p-0 portfolio-item third">
                    <div class="position-relative overflow-hidden">
                        <div class="portfolio-img d-flex align-items-center justify-content-center">
                            <img class="img-fluid" src={service3} alt="none" />
                        </div>
                        <div class="portfolio-text bg-secondary d-flex flex-column align-items-center justify-content-center">
                            <h4 class="text-white mb-4">Registro e Incorporacion de negocio</h4>
                            <div class="d-flex align-items-center justify-content-center">
                            <a class="btn btn-outline-primary m-1" href="none">
                                  <h3>Contactenos Hoy!</h3>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12 p-0 portfolio-item first">
                    <div class="position-relative overflow-hidden">
                        <div class="portfolio-img d-flex align-items-center justify-content-center">
                            <img class="img-fluid" src={service4} alt="none" />
                        </div>
                        <div class="portfolio-text bg-secondary d-flex flex-column align-items-center justify-content-center">
                            <h4 class="text-white mb-4">Preparador de Taxes</h4>
                            <div class="d-flex align-items-center justify-content-center">
                            <a class="btn btn-outline-primary m-1" href="none">
                                  <h3>Contactenos Hoy!</h3>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12 p-0 portfolio-item second">
                    <div class="position-relative overflow-hidden">
                        <div class="portfolio-img d-flex align-items-center justify-content-center">
                            <img class="img-fluid" src={service5} alt="none" />
                        </div>
                        <div class="portfolio-text bg-secondary d-flex flex-column align-items-center justify-content-center">
                            <h4 class="text-white mb-4">Contabilidad para personas fisicas</h4>
                            <div class="d-flex align-items-center justify-content-center">
                                <a class="btn btn-outline-primary m-1" href="none">
                                  <h3>Contactenos Hoy!</h3>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12 p-0 portfolio-item third">
                    <div class="position-relative overflow-hidden">
                        <div class="portfolio-img d-flex align-items-center justify-content-center">
                            <img class="img-fluid" src={service6} alt="none" />
                        </div>
                        <div class="portfolio-text bg-secondary d-flex flex-column align-items-center justify-content-center">
                            <h4 class="text-white mb-4">Payroll</h4>
                            <div class="d-flex align-items-center justify-content-center">
                                <a class="btn btn-outline-primary m-1" href="none">
                                  <h3>Contactenos Hoy!</h3>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Servicios