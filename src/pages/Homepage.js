import React from 'react'
import styled from 'styled-components'
import About from '../components/about/About'
import Banner from '../components/Banner/Banner'
import Blogmovil from '../components/blog-movil/Blogmovil'
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

    {/*Esto hace que un componente deje de ser visible cuando detecte un disposiivo con un width  */}
      <ResponsiveDivBlog>
        <Blogmovil />
      </ResponsiveDivBlog>

    {/*Esto hace que un componente deje de ser visible cuando detecte un disposiivo con un width  */}
    <ResponsiveDivBlogNormal>
      <Servicios />
    </ResponsiveDivBlogNormal>

    </>
  )
}

export default Homepage

const ResponsiveDivBlog = styled.div`
@media (min-width: 800px) and (max-width: 1500px) {
  display: none;
}
`;

const ResponsiveDivBlogNormal = styled.div`
@media (min-width: 300px) and (max-width: 800px) {
  display: none;
}
`;