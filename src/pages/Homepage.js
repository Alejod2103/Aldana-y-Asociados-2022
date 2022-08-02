import React from 'react'
import About from '../components/about/About'
import Banner from '../components/Banner/Banner'
import Infonav from '../components/infonav/Infonav'
import Servicescarousel from '../components/servicios-carousel/Servicescarousel'
import Servicios from '../components/servicios/Servicios'

const Homepage = () => {
  return (
    <>
    <Infonav />
    <Banner />
    <About />
    <Servicescarousel />
    <Servicios />
    </>
  )
}

export default Homepage