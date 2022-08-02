import React from 'react'

const Topbar = () => {
  return (
    <>
    <div class="container-fluid bg-dark py-3">
        <div class="container">
            <div class="row">
                <div class="col-md-6 text-center text-lg-left mb-2 mb-lg-0">
                    <div class="d-inline-flex align-items-center">
                        <a class="text-white pr-3" href="null">FAQs</a>
                        <span class="text-white">|</span>
                        <a class="text-white px-3" href="null">Ayuda</a>
                        <span class="text-white">|</span>
                        <a class="text-white pl-3" href="null">Soporte</a>
                    </div>
                </div>
                <div class="col-md-6 text-center text-lg-right">
                    <div class="d-inline-flex align-items-center">
                        <a class="text-white px-3" href="null">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                        <a class="text-white px-3" href="null">
                            <i class="fab fa-twitter"></i>
                        </a>
                        <a class="text-white px-3" href="null">
                            <i class="fab fa-linkedin-in"></i>
                        </a>
                        <a class="text-white px-3" href="null">
                            <i class="fab fa-instagram"></i>
                        </a>
                        <a class="text-white pl-3" href="null">
                            <i class="fab fa-youtube"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Topbar