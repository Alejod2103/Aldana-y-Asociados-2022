import React from 'react'

const Infonav = () => {
  return (
    <>
    <div class="container-fluid bg-white py-3">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 text-left mb-3 mb-lg-0">
                    <div class="d-inline-flex text-left">
                        <h1 class="flaticon-office font-weight-normal text-primary m-0 mr-3"><h1 style={{display: 'none'}}>texto relleno</h1></h1>
                        <div class="d-flex flex-column">
                            <h5>Nuestras Oficinas</h5>
                            <p class="m-0">133 Rollins Avenue, Suite 1, Rockville, MD 20852</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 text-left text-lg-center mb-3 mb-lg-0">
                    <div class="d-inline-flex text-left">
                        <h1 class="flaticon-email font-weight-normal text-primary m-0 mr-3"><h1 style={{display: 'none'}}>texto relleno</h1></h1>
                        <div class="d-flex flex-column">
                            <h5>Nuestro Email</h5>
                            <p class="m-0">test@example.com</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 text-left text-lg-right mb-3 mb-lg-0">
                    <div class="d-inline-flex text-left">
                        <h1 class="flaticon-telephone font-weight-normal text-primary m-0 mr-3"><h1 style={{display: 'none'}}>texto relleno</h1></h1>
                        <div class="d-flex flex-column">
                            <h5>Llamenos Hoy!</h5>
                            <p class="m-0">+1(813)278-6391</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Infonav