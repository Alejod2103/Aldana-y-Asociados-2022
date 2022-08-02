import React from 'react'
import Aldana from '../../img/aldana.jpeg'
import '../../lib/owlcarousel/assets/owl.carousel.min.css';

const Servicescarousel = () => {
  return (
    <>
        <div class="container-fluid py-5">
        <div class="container py-5">
            <div class="row">
                <div class="col-lg-6 pr-lg-5">
                    <h6 class="text-primary font-weight-normal text-uppercase mb-3">Sobre mí</h6>
                    <h1 class="mb-4 section-title">Aprende Estrategias para lograr el éxito empresarial</h1>
                    <p>Hola, soy Henry Aldana, Contador Público y Asesor Empresarial; fundador del despacho de Contadores Públicos Aldana & Associates, PSC, LTD.<br/><br/>
                    También Escritor, incluyendo el Best seller “Lo Que El IRS NO Quiere Que Sepas” Recibí el premio nacional como el mejor contador defensor de los pequeños negocios de Los Estados Unidos de la SBA por el presidente Bush en la Casa Blanca.<br/>

<br/> Mi propósito es ayudar a dueños de negocio como tú a construir negocios de clase mundial, a ganar más dinero y pagar menos impuestos de una manera legal, ética y moral.</p>
                    <a href="null" class="btn btn-primary mt-3 py-2 px-4">Obtenga asesoria hoy!</a>
                </div>

                <div class="col-lg-5">
                    <div class="d-flex flex-column align-items-center justify-content-center h-100 overflow-hidden">
                        <img class="h-100" src={Aldana} alt="none" />
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script src="lib/owlcarousel/owl.carousel.min.js"></script>
    </>
  )
}

export default Servicescarousel