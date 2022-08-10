import React from 'react'
import img6 from '../../river/river6.jpg'

const Articulo6 = () => {
  return (
    <>
    <div class="container-fluid py-5">
        <div class="container py-5">
            <div class="row">
                <div class="col-lg-6 pr-lg-5">
                    <h6 class="text-primary font-weight-normal text-uppercase mb-3">Aldana & Asociados Blog</h6>
                    <h1 class="mb-4 section-title">Contabilidad y pago de TAXES</h1>
                    <p> Ofrecemos una gama completa de servicios contables y fiscales a pequeñas empresas, organizaciones y particulares. Al igual que las personas son diferentes, también lo son los servicios contables y fiscales que necesitan.
                        Los contribuyentes individuales generalmente buscan servicios fiscales para preparar declaraciones de impuestos completas y precisas pagando la menor cantidad de impuestos o consiguiendo su mayor reembolso de impuestos con la menor cantidad de exposición.
                        Los propietarios de pequeñas empresas también están buscando a alguien que les ayude con la contabilidad y los servicios de impuestos para el negocio también.
                        Otras organizaciones buscan informes financieros para proporcionarlos a sus miembros, bancos, inversores u otros. </p>
                    <a href="tel:+1(301)770-4901" class="btn btn-primary mt-3 py-2 px-4">Obtenga asesoria hoy mismo!</a>
                </div>

                <div class="col-lg-5">
                    <div class="d-flex flex-column align-items-center justify-content-center h-100 overflow-hidden">
                        <img class="h-100" src={img6} alt="none" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Articulo6