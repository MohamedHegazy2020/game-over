import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleArrow() {
  return (
    <div
      className='d-none'
    />
  );
}

export default function ScreenShotsSlider({src}) {
    const settings = {
      dots: false,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2500,
      cssEase: "linear",
      nextArrow:<SampleArrow/>,
      prevArrow:<SampleArrow/>
    };
  return (
    <>
      {" "}
      <div>
        <Slider {...settings}>
          {src.map((shoot,idx)=>{return (
            <>
              <div key={idx} className='opacity-100'>
                <img src={shoot.image} alt=""className='w-100'/>
              </div>
            </>
          );})}
        </Slider>
      </div>
      
    </>
  );
}
