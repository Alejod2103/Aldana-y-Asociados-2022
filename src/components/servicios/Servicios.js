import React from 'react'
import { Link } from 'react-router-dom';
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
                        <li class="btn btn-outline-primary m-1 active" data-filter=".first">Abrir una LLC</li>
                        <li class="btn btn-outline-primary m-1 active" data-filter=".first">Abrir una empresa en USA</li>
                        <li class="btn btn-outline-primary m-1 active" data-filter=".first">LLC Para bienes y raices</li>
                        <li class="btn btn-outline-primary m-1 active" data-filter=".second">Preparador de Taxes</li>
                        <li class="btn btn-outline-primary m-1 active" data-filter=".third">¿Donde Encuentro Contadores En Miami?</li>
                        <li class="btn btn-outline-primary m-1 active" data-filter=".third">¿Como Pagar Menos Impuestos En Usa?</li>
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
                            <h4 class="text-white mb-4" style={{fontSize: '15px'}}>Como Abrir una LLC en Miami-FL</h4>
                            <div class="d-flex align-items-center justify-content-center">
                            <Link to='/blog/llc-usa' class="btn btn-outline-primary m-1" href="none">
                                  <h3 style={{color: '#fff'}} >Ver articulo!</h3>
                            </Link>
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
                            <h4 class="text-white mb-4" style={{fontSize: '15px'}}>Como registrar una empresa en USA</h4>
                            <div class="d-flex align-items-center justify-content-center">
                            <Link class="btn btn-outline-primary m-1" to="/blog/empresa-usa">
                                <h3 style={{color: '#fff'}}>Ver articulo!</h3>
                            </Link>
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
                            <h4 class="text-white mb-4" style={{fontSize: '15px'}}>LLC Para bienes y raices</h4>
                            <div class="d-flex align-items-center justify-content-center">
                            <Link class="btn btn-outline-primary m-1" to="/blog/bienesyraices">
                            <h3 style={{color: '#fff'}}>Ver articulo!</h3>
                            </Link>
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
                            <h4 class="text-white mb-4" style={{fontSize: '15px'}}>Preparador de Taxes</h4>
                            <div class="d-flex align-items-center justify-content-center">
                            <Link class="btn btn-outline-primary m-1" to="/blog/taxes">
                            <h3 style={{color: '#fff'}}>Ver articulo!</h3>
                                </Link>
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
                            <h4 class="text-white mb-4" style={{fontSize: '15px'}}>¿Donde Encuentro Contadores En Miami?</h4>
                            <div class="d-flex align-items-center justify-content-center">
                                <Link class="btn btn-outline-primary m-1" to="/blog/contadores-miami">
                                <h3 style={{color: '#fff'}}>Ver articulo!</h3>
                                </Link>
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
                            <h4 class="text-white mb-4" style={{fontSize: '15px'}} >¿Como Pagar Menos Impuestos En Usa?</h4>
                            <div class="d-flex align-items-center justify-content-center">
                                <Link class="btn btn-outline-primary m-1" to="/blog/ahorro">
                                <h3 style={{color: '#fff'}}>Ver articulo!</h3>
                                </Link>
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