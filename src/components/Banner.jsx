import React from 'react'
import banImg from '../assets/banner.png'
import { Link } from 'react-router-dom'
// import "slick-carousel/slick/slick.css";
// import Slider from "react-slick";

const Banner = () => {
    
    // const settings = {
    //     dots: true,
    //     arrows: false,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     appendDots: dots => (
    //       <div
    //         style={{
    //           backgroundColor: "red",
    //           borderRadius: "10px",
    //           padding: "5px"
    //         }}
    //       >
    //         <ul style={{ margin: "0px" }}> {dots} </ul>
    //       </div>
    //     ),
    //     customPaging: i => (
    //       <div
    //         style={{
    //           width: "30px",
    //           color: "blue",
    //           border: "1px blue solid"
    //         }}
    //       >
    //         {i + 1}
    //       </div>
    //     )
    //   };
  return (
    <section>
        <div className="">
        {/* <Slider {...settings}> */}
            <Link to="/shop"><img src={banImg} alt="" /></Link>
            {/* <Link to="/shop"><img src={banImg} alt="" /></Link>
            <Link to="/shop"><img src={banImg} alt="" /></Link>
            <Link to="/shop"><img src={banImg} alt="" /></Link> */}
        {/* </Slider> */}
        </div>
    </section>
  )
}

export default Banner