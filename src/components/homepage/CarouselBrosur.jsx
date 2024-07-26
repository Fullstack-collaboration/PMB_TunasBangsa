import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import brosur1 from "../../assets/img/brosur1.jpeg";

const captionContainerStyle = {
  position: 'relative',
  display: 'inline-block',
  width: '100%',
};

const captionStyle = {
  position: 'absolute',
  bottom: '0',
  left: '0',
  right: '0',
  backgroundColor: 'rgba(0, 0, 0, 0.5)', // Hitam dengan 50% transparansi
  padding: '20px',
  borderRadius: '5px',
  color: '#ffffff', // Warna teks putih
  backdropFilter: 'blur(10px)', // Efek blur
  width: '100%',
};

const CarouselBrosur = () => {
  return (
    <Carousel data-bs-theme="dark" className='h-75' >
      <Carousel.Item>
        <img src={brosur1} className='w-100' alt="First slide" />
        {/* <div style={captionContainerStyle}>
          <Carousel.Caption style={captionStyle}>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </div> */}
      </Carousel.Item>
      <Carousel.Item>
        <img src={brosur1} className='w-100' alt="First slide" />
        {/* <div style={captionContainerStyle}>
          <Carousel.Caption style={captionStyle}>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </div> */}
      </Carousel.Item>
      <Carousel.Item>
        <img src={brosur1} className='w-100' alt="First slide" />
        {/* <div style={captionContainerStyle}>
          <Carousel.Caption style={captionStyle}>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </div> */}
      </Carousel.Item>
      
    </Carousel>
  );
};

export default CarouselBrosur;
