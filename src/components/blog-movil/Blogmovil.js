import React from 'react'
import { Link } from 'react-router-dom'
import img1 from '../../river/river1.jpg'
import img2 from '../../river/river2.jpg'
import img3 from '../../river/river3.jpg'
import img4 from '../../river/river4.jpg'
import img5 from '../../river/river5.jpg'

const Blogmovil = () => {
  return (
    <>
      <div class="container-fluid bg-light pt-5">
        <div class="container py-5">
            <div class="row justify-content-center">
                <div class="col-lg-6 col-md-8 col text-center mb-4">
                    <h6 class="text-primary font-weight-normal text-uppercase mb-3">Nuestro blog</h6>
                    <h1 class="mb-4">Descubre lo que Aldana & Associates, PSC, LTD puede hacer por tu Negocio</h1>
                </div>
            </div>
            <div class="row pb-3">
                <div class="col-md-4 mb-4">
                    <div class="card border-0 mb-2">
                        <img class="card-img-top" src={img1} alt="none" />
                        <div class="card-body bg-white p-4">
                            <div class="d-flex align-items-center mb-3">
                                <Link class="btn btn-primary" to="/blog/llc-usa"><i class="fa fa-link"></i></Link>
                                <h5 class="m-0 ml-3 text-truncate">Como Abrir una LLC en Miami-FL</h5>
                            </div>
                            <p>Muchos empresarios optan por establecer una LLC en Florida principalmente debido a los beneficios que ofrece este tipo de negocios en cuanto a flexibilidad en la estructura comercial y capacidad para proteger los activos personales.</p>
                            <div class="d-flex">
                                <small class="mr-3"><i class="fa fa-user text-primary"></i> Aldana & Asociados</small>
                                <small class="mr-3"><i class="fa fa-comments text-primary"></i>+6.2k views</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mb-4">
                    <div class="card border-0 mb-2">
                        <img class="card-img-top" src={img2} alt="none" />
                        <div class="card-body bg-white p-4">
                            <div class="d-flex align-items-center mb-3">
                                <Link class="btn btn-primary" to="/blog/empresa-usa"><i class="fa fa-link"></i></Link>
                                <h5 class="m-0 ml-3 text-truncate">Como registrar una empresa en USA</h5>
                            </div>
                            <p>Establecer una empresa en Estados Unidos puede ser una excelente opción para ampliar tus horizontes y mejorar de forma significativa tus ingresos y registrar un negocio en EE.UU. es el paso inicial para poder actuar con formalidad en el país de las oportunidades.</p>
                            <div class="d-flex">
                            <small class="mr-3"><i class="fa fa-user text-primary"></i> Aldana & Asociados</small>
                                <small class="mr-3"><i class="fa fa-comments text-primary"></i>+15.8k views</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mb-4">
                    <div class="card border-0 mb-2">
                        <img class="card-img-top" src={img3} alt="none" />
                        <div class="card-body bg-white p-4">
                            <div class="d-flex align-items-center mb-3">
                                <Link class="btn btn-primary" to="/blog/empresa-usa"><i class="fa fa-link"></i></Link>
                                <h5 class="m-0 ml-3 text-truncate">LLC Para bienes y raices</h5>
                            </div>
                            <p>Es importante recordar que cada entidad legal tiene un propósito diferente, una corporación, un limited liability, un partnership, etc. No obstante, nos enfocaremos en el LLC y lo que puedes con esto en el ámbito de inversión en bienes raíces.</p>
                            <div class="d-flex">
                            <small class="mr-3"><i class="fa fa-user text-primary"></i> Aldana & Asociados</small>
                                <small class="mr-3"><i class="fa fa-comments text-primary"></i>+8.9k views</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mb-4">
                    <div class="card border-0 mb-2">
                        <img class="card-img-top" src={img4} alt="none" />
                        <div class="card-body bg-white p-4">
                            <div class="d-flex align-items-center mb-3">
                                <Link class="btn btn-primary" to="/blog/contadores-miami"><i class="fa fa-link"></i></Link>
                                <h5 class="m-0 ml-3 text-truncate">¿Donde Encuentro Contadores En Miami?</h5>
                            </div>
                            <p>Es vital para todo negocio o emprendimiento, contar con asesores altamente capacitados en Aldana & Asociados podrás encontrar una persona de confianza que te podrá ayudar. Somos una empresa especializada en negocios, situados en la ciudad de Miami, Florida, tambien brindamos asistencia en TODS LOS ESTADOS</p>
                            <div class="d-flex">
                            <small class="mr-3"><i class="fa fa-user text-primary"></i> Aldana & Asociados</small>
                                <small class="mr-3"><i class="fa fa-comments text-primary"></i>+11.8k views</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mb-4">
                    <div class="card border-0 mb-2">
                        <img class="card-img-top" src={img5} alt="none" />
                        <div class="card-body bg-white p-4">
                            <div class="d-flex align-items-center mb-3">
                                <Link class="btn btn-primary" to="/blog/ahorro"><i class="fa fa-link"></i></Link>
                                <h5 class="m-0 ml-3 text-truncate">¿Como Pagar Menos Impuestos En Usa?</h5>
                            </div>
                            <p>Los taxes en USA son una de la mayor prioridad para las personas que viven en Estados Unidos este 2022. Los contribuyentes siempre buscan formas legales de pagar menos impuestos, así que este artículo te ayudará a lograrlo con todas las de la ley. Si quieres pagar menos taxes en USA, sigue leyendo porque compartiremos varias formas de hacerlo.</p>
                            <div class="d-flex">
                            <small class="mr-3"><i class="fa fa-user text-primary"></i> Aldana & Asociados</small>
                                <small class="mr-3"><i class="fa fa-comments text-primary"></i>+13.1k views</small>
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

export default Blogmovil