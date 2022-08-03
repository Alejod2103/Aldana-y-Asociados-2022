import React from 'react'

const Footer = () => {
  return (
    <>
    <div class="container-fluid bg-dark text-white py-5 px-sm-3 px-md-5">
        <div class="row pt-5">
            <div class="col-lg-3 col-md-6 mb-5">
                <h4 class="text-primary mb-4">Get In Touch</h4>
                <p><i class="fa fa-map-marker-alt mr-2"></i>133 Rollins Avenue, Suite 1, Rockville, MD 20852</p>
                <p><i class="fa fa-phone-alt mr-2"></i>+1 301-770-4901</p>
                <p><i class="fa fa-envelope mr-2"></i>Support@aldanas.com</p>
                <div class="d-flex justify-content-start mt-4">
                    <a class="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{width: '38px', height: '38px'}} href="null"><i class="fab fa-twitter"></i></a>
                    <a class="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{width: '38px', height: '38px'}} href="null"><i class="fab fa-facebook-f"></i></a>
                    <a class="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{width: '38px', height: '38px'}} href="null"><i class="fab fa-linkedin-in"></i></a>
                    <a class="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{width: '38px', height: '38px'}} href="null"><i class="fab fa-instagram"></i></a>
                </div>
            </div>
        </div>
        <div class="container border-top border-secondary pt-5">
            <p class="m-0 text-center text-white">
                &copy; <a class="text-white font-weight-bold" href="null">Aldana & Asociados</a>. All Rights Reserved.
            </p>
        </div>
    </div>
    </>
  )
}

export default Footer