import React, { useContext } from 'react'
import Container from './Container'
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import ProductComponents from './ProductComponents'
import { ApiData } from './ContextApi';



const FeaturePro = () => {
  let data = useContext(ApiData)

    const settings = {
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
    
  }

  


  return (
    <section>
      <Container>
        <div className="text-center pt-[120px] pb-[48px]">
          <h2 className='text-[42px] font-jose text-[#1A0B5B] font-bold'>Featured Products</h2>
        </div>

        <Slider {...settings}>

          {data.map((item) => (

            <ProductComponents item={item} />
          ))}
        </Slider>


      </Container>
    </section>
  )
}

export default FeaturePro