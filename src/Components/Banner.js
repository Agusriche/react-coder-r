import React from 'react'
import {Carousel} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import slide1 from './assests/bannerimages/1.jpg'
import slide2 from './assests/bannerimages/2.jpg'


const Banner = () => {
  return (
    

    <Carousel>
    <Carousel.Item>
        <img
        className="d-block w-100"
        src={slide1}
        alt="{slide1}"
        />
        <Carousel.Caption>
        <h3>UNITE AL MOVIMIENTO</h3>
        <p>Movete, reacciona, vivi</p>
        </Carousel.Caption>
    </Carousel.Item>


    <Carousel.Item>
        <img
        className="d-block w-100"
        src={slide2}
        alt="{slide2}"
        />

        <Carousel.Caption>
        <h3>AZUL Y ORO</h3>
        <p>La pasion no cambia, los colores tampoco</p>
        </Carousel.Caption>
    </Carousel.Item>
    </Carousel>

   
  )
}

export default Banner