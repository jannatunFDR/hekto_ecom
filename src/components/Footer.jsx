import React from 'react'
import Container from './Container';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import FootImg from '../assets/logo.png'

const Footer = () => {
  return (
    <>
    <section className="bg-[#EEEFFB] py-16 mt-20">
        <Container>
          <div className="flex flex-wrap justify-between">
            <div className="w-full lg:w-[35%] mb-8 lg:mb-0">
              <img src={FootImg} alt="" className='pb-[20px]'/>
              <div className="flex items-center relative mb-4">
                <input
                  className="pl-4 h-[40px] w-[70%] md:w-[40%] bg-[#D9D9D9] focus:outline-none rounded-l-md"
                  type="text"
                  placeholder="Enter Email Address"
                />
                <button className="h-[40px] w-[30%] md:w-[20%] bg-[#FB2E86] text-white  text-center font-medium rounded-r">
                  Sign Up
                </button>
              </div>
              <div>
                <h4 className="text-[16px] text-[#8A8FB9] font-Josefin_Sans py-2">
                  Contact Info
                </h4>
                <p className="text-[16px] text-[#8A8FB9] font-Josefin_Sans">
                  17 Princess Road, London, Greater London NW1 8JR, UK
                </p>
              </div>
            </div>

            
            <div className="w-full lg:w-[20%] mb-8 lg:mb-0">
              <h2 className="text-[22px] text-[#000000] font-Josefin_Sans font-semibold pb-4">
                Categories
              </h2>
              {[
                "Laptops & Computers",
                "Cameras & Photography",
                "Smart Phones & Tablets",
                "Video Games & Consoles",
                "Waterproof Headphones",
              ].map((item, index) => (
                <h5
                  key={index}
                  className="text-[16px] text-[#8A8FB9] font-Josefin_Sans font-normal mt-2 transition duration-300 cursor-pointer"
                >
                  {item}
                </h5>
              ))}
            </div>

            
            <div className="w-full lg:w-[20%] mb-8 lg:mb-0">
              <h2 className="text-[22px] text-[#000000] font-Josefin_Sans font-semibold pb-4">
                Customer Care
              </h2>
              {[
                "My Account",
                "Discount",
                "Returns",
                "Orders History",
                "Order Tracking",
              ].map((item, index) => (
                <h5
                  key={index}
                  className="text-[16px] text-[#8A8FB9] font-Josefin_Sans font-normal mt-2 transition duration-300 cursor-pointer"
                >
                  {item}
                </h5>
              ))}
            </div>

            
            <div className="w-full lg:w-[20%]">
              <h2 className="text-[22px] text-[#000000] font-Josefin_Sans font-semibold pb-4">
                Pages
              </h2>
              {[
                "Blog",
                "Browse the Shop",
                "Category",
                "Pre-Built Pages",
                "Visual Composer Elements",
                "WooCommerce Pages",
              ].map((item, index) => (
                <h5
                  key={index}
                  className="text-[16px] text-[#8A8FB9] font-Josefin_Sans font-normal mt-2 transition duration-300 cursor-pointer"
                >
                  {item}
                </h5>
              ))}
            </div>
          </div>
        </Container>
      </section>

     
      <section className="bg-[#E7E4F8] py-5">
        <Container>
          <div className="flex flex-wrap justify-around items-center">
            
            <div className="w-full lg:w-auto text-center lg:text-left mb-4 lg:mb-0">
              <h4 className="text-[16px] text-[#9DA0AE] font-semibold">
              ©Webecy - All Rights Reserved
              </h4>
            </div>

            
            <div className="w-full lg:w-auto flex justify-center lg:justify-end items-center gap-5 text-[20px] text-[#151875]">
              {[
                { icon: <FaFacebook />, link: "#" },
                { icon: <FaInstagram />, link: "#" },
                { icon: <FaTwitter />, link: "#" },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className="hover:text-[#FB2E86] transition duration-300"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

export default Footer