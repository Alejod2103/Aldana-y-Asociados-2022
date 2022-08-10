import React from 'react'
import img4 from '../../river/river4.jpg';
const Articulo4 = () => {
  return (
    <>
      <div class="container-fluid py-5">
        <div class="container py-5">
            <div class="row">
                <div class="col-lg-6 pr-lg-5">
                    <h6 class="text-primary font-weight-normal text-uppercase mb-3">Aldana & Asociados Blog</h6>
                    <h1 class="mb-4 section-title">¿Donde Encuentro Contadores En Miami?</h1>
                    <p> Es vital para todo negocio o emprendimiento, contar con asesores altamente capacitados en Aldana & Asociados                                                                                                  podrás encontrar una persona de confianza que te podrá ayudar. Somos una empresa especializada en negocios, situados en la ciudad de Miami, Florida.
                        Proveemos eficaces servicios integrados en contaduría, impuestos, financieros, migratorios, compra y venta de propiedades, para todo tipo de personas y empresas.</p>
                    <a href="tel:+1(301)770-4901" class="btn btn-primary mt-3 py-2 px-4">Obtenga asesoria hoy mismo!</a>
                </div>

                <div class="col-lg-5">
                    <div class="d-flex flex-column align-items-center justify-content-center h-100 overflow-hidden">
                        <img class="h-100" src={img4} alt="none" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Articulo4