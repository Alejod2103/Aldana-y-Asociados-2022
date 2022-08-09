import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <div class="container-fluid position-relative nav-bar p-0">
        <div class="container position-relative" style={{zIndex: '9'}}>
            <nav class="navbar navbar-expand-lg bg-secondary navbar-dark py-3 py-lg-0 pl-3 pl-lg-5">
                <Link to="/" class="navbar-brand">
                    <h1 class="m-0 display-5 text-white">Aldana<span class="text-primary" style={{marginLeft: '5px', marginRight: '5px'}}>&</span>Asociados</h1>
                </Link>
                <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-between px-3" id="navbarCollapse">
                    <div class="navbar-nav ml-auto py-0">
                        <Link to="/" class="nav-item nav-link active">Home</Link>
                        <Link to="/home/about" class="nav-item nav-link">Sobre Nosotros</Link>
                        <div class="nav-item dropdown">
                            <Link to="/home/servicios" class="nav-link dropdown-toggle" data-toggle="dropdown">Nuestros Servicios</Link>
                            <div class="dropdown-menu rounded-0 m-0">
                                <Link to="/home/servicios" class="dropdown-item">Asistencia Financiera</Link>
                                <Link to="/home/servicios" class="dropdown-item">Asistencia Financiera para Negocios</Link>
                                <Link to="/home/servicios" class="dropdown-item">Asistencia Legal</Link>
                                <Link to="/home/servicios" class="dropdown-item">Incorporacion de Negocios</Link>
                            </div>
                        </div>
                        <a href="contact.html" class="nav-item nav-link">Contactenos</a>
                    </div>
                </div>
            </nav>
        </div>
    </div>
    </>
  )
}

export default Header