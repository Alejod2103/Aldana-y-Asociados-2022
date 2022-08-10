import React from 'react'
import img1 from '../../river/river1.jpg';
const Articulo1 = () => {
  return (
    <>
      <div class="container-fluid py-5">
        <div class="container py-5">
            <div class="row">
                <div class="col-lg-6 pr-lg-5">
                    <h6 class="text-primary font-weight-normal text-uppercase mb-3">Aldana & Asociados Blog</h6>
                    <h1 class="mb-4 section-title">Como Abrir una LLC en Miami-FL</h1>
                    <p>¿Cuáles son los beneficios de crear una LLC en Miami?
                        El primer beneficio que conseguirás al crear tu propia compañía en Miami es que podrás registrar tu propia marca y darla a conocer. En segundo lugar, podrás abrir cuentas bancarias y también podrás hacer importaciones en el país.
                        Otro beneficio son las facilidades que tienen las empresas estadounidenses para hacer negocios, cerrar tratos y comercializar productos con el resto del mundo, pues la compañía estará establecida en un país que cuenta con una de las economías más sólidas a nivel mundial.
                        Las facilidades que representa son otro de los beneficios de crear una LLC en Miami. En el estado de la Florida no se exige un capital mínimo para su conformación. Tampoco necesitas ser ciudadano estadounidense, ni vivir en territorio norteamericano para establecer una LLC, ni siquiera necesitas visa ni permisos de trabajo.
                        Puedes seguir residenciado en tu país y establecer tu negocio en Miami sin necesidad de viajar, pues todo el procedimiento puede desarrollarse a distancia, de manera digital.
                         </p>
                    <a href="tel:+1(301)770-4901" class="btn btn-primary mt-3 py-2 px-4">Obtenga asesoria hoy mismo!</a>
                </div>

                <div class="col-lg-5">
                    <div class="d-flex flex-column align-items-center justify-content-center h-100 overflow-hidden">
                        <img class="h-100" src={img1} alt="none" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Articulo1