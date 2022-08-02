import React from 'react'
import DomainAddOutlinedIcon from '@mui/icons-material/DomainAddOutlined';
import SavingsOutlinedIcon from '@mui/icons-material/SavingsOutlined';
import RequestQuoteOutlinedIcon from '@mui/icons-material/RequestQuoteOutlined';
import CalculateOutlinedIcon from '@mui/icons-material/CalculateOutlined';
import { VscLaw } from "react-icons/vsc";

const About = () => {
  return (
    <>
        <div class="container-fluid bg-light">
        <div class="container">
            <div class="row">
                <div class="col-lg-5">
                    <div class="d-flex flex-column align-items-center justify-content-center bg-primary h-100 py-5 px-3">
                        <VscLaw className='display-1 font-weight-normal text-secondary mb-3'/>
                        <h4 class="display-3 mb-3">30+</h4>
                        <h1 class="m-0">Años de experiencia</h1>
                    </div>
                </div>
                <div class="col-lg-7 m-0 my-lg-5 pt-5 pb-5 pb-lg-2 pl-lg-5">
                    <h6 class="text-primary font-weight-normal text-uppercase mb-3">Sobre nosotros</h6>
                    <h1 class="mb-4 section-title">Grandes ideas para pequeños negocios.</h1>
                    <p>Somos una firma registrada en el estado de Maryland, USA, que se especializa en los servicios de asesoría, consultoría y acompañamiento, a personas físicas, pequeñas y medianas empresas, en el campo de la preparación de impuestos y el desarrollo empresarial.</p>
                    <div class="row py-2">
                        <div class="col-sm-6">
                            <div class="d-flex align-items-center mb-4">
                                <CalculateOutlinedIcon className='font-weight-normal text-primary m-0 mr-3' />
                                <h5 class="text-truncate">La mejor asistencia para ahorrar tu dinero</h5>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="d-flex align-items-center mb-4">
                                <RequestQuoteOutlinedIcon className="font-weight-normal text-primary m-0 mr-3" />
                                <h5 class="text-truncate m-0">Preparador de Impuestos</h5>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="d-flex align-items-center mb-4">
                                <DomainAddOutlinedIcon className="font-weight-normal text-primary m-0 mr-3" />
                                <h5 class="text-truncate m-0">Contabilidad para negocios</h5>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="d-flex align-items-center mb-4">
                            <SavingsOutlinedIcon className='font-weight-normal text-primary m-0 mr-3' />
                                <h5 class="text-truncate m-0">Ahorra en tus Impuestos</h5>
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

export default About