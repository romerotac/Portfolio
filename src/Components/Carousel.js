import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Carousel = ({images}) => {
    var settings = {
      infinite: true,
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      
      lazyLoad: true,
      autoplay: true,
      autoplaySpeed: 5000,
    };

    return (
        <>
        <div className="imageslider">
            <Slider className="slider"{...settings}>
                {images.map((item) =>(
                    <div key={item.id}>
                        <img src={item.src} alt={item.alt} className='image-carousel'/>
                    </div>
                ))}  
            </Slider>
        </div>
        </>
    );
  }

  export default Carousel;