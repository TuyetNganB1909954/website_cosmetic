import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Bannar1 from '../../../assets/img/bannar1.jpg'
import Bannar2 from '../../../assets/img/bannar2.jpg'
import Bannar3 from '../../../assets/img/bannar3.jpg'
import Bannar4 from '../../../assets/img/bannar4.jpg'
import Bannar5 from '../../../assets/img/bannar5.jpg'
function slider() {
  return (
    <>
    <div className='container d-flex'> 
        <div className='slider-l mt-5'>
        <Carousel>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={Bannar1}
            alt="First slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={Bannar2}
            alt="Second slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={Bannar3}
            alt="Third slide"
            />
        </Carousel.Item>
        </Carousel>
        </div>
        <div className='slider-r my-5'>
            <img
                className="d-block w-100 mb-3 img-fluid"
                src={Bannar4}
                alt="Second slide"
            />
            <img
                className="d-block w-100  img-fluid"
                src={Bannar5}
                alt="Second slide"
            />
        </div>
    </div>
    
    </>
  )
}

export default slider