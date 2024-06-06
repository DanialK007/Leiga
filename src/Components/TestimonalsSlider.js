// TestimonialsSlider.js
import React from 'react';
import Slider from 'react-slick';
import { NextArrow, PrevArrow } from './CustomArrow';

const testimonials = [
  {
    id: 1,
    quote: "Liège's creative prowess in the digital marketing realm is unmatched.",
    name: "Lucas Smith",
    title: "Marketing Director",
    company: "Kobe",
  },
  {
    id: 2,
    quote: "Choosing Liège for our digital marketing needs was one of the best decisions we've made.",
    name: "Sophia Patel",
    title: "Tech Innovate",
    company: "Terra",
  },
  {
    id: 3,
    quote: "Working with Liège has been a transformative experience for our brand.",
    name: "Emma Harrison",
    title: "BrightFutures",
    company: "BrightFutures",
  },
];

const TestimonialsSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className='relative px-10 py-20'>
      <Slider {...settings}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} style={{ padding: '0 20px' }}>
            <div className='bg-indigo-50 p-10 w-1/2'>
              <p>"{testimonial.quote}"</p>
              <p><strong>{testimonial.name}</strong>, {testimonial.title}</p>
              <p>{testimonial.company}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialsSlider;
