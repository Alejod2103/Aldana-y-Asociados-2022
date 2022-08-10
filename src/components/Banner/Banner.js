import React from 'react';
import imagen1 from '../../img/img11.jpg';
import imagen2 from '../../img/img2.jpg';

const Banner = () => {
  return (
    <>
    <div class="container-fluid p-0">
        <div id="header-carousel" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img class="w-100" src={imagen1} alt="none" />
                    <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                        <div class="p-3" style={{maxWidth: '800px'}}>
                            <h4 class="text-primary text-uppercase font-weight-normal mb-md-3">Profesionales a tu servicio</h4>
                            <h3 class="display-3 text-white mb-md-4">Asistencia Legal</h3>
                            <a href="null" class="btn btn-primary py-md-3 px-md-5 mt-2 mt-md-4">Llame ahora!</a>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <img class="w-100" src={imagen2} alt="none" />
                    <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                        <div class="p-3" style={{maxWidth: '800px'}}>
                            <h4 class="text-primary text-uppercase font-weight-normal mb-md-3">La mejor asistencia y soluciones</h4>
                            <h3 class="display-3 text-white mb-md-4">Asistencia Financiera</h3>
                            <a href="null" class="btn btn-primary py-md-3 px-md-5 mt-2 mt-md-4">Llame ahora!</a>
                        </div>
                    </div>
                </div>
            </div>
            <a class="carousel-control-prev" href="#header-carousel" data-slide="prev">
                <div class="btn btn-primary" style={{width: '45px', height: '45px'}}>
                    <span class="carousel-control-prev-icon mb-n2"></span>
                </div>
            </a>
            <a class="carousel-control-next" href="#header-carousel" data-slide="next">
                <div class="btn btn-primary" style={{width: '45px', height: '45px'}}>
                    <span class="carousel-control-next-icon mb-n2"></span>
                </div>
            </a>
        </div>
    </div>
    </>
  )
}

export default Banner