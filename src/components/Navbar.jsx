import React from 'react'
import Container from './Container'
import Flex from './Flex'
import logoImg from '../assets/logo.png'
import { IoSearch } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <section className=''>
        <Container>
            <Flex className="">
                <div className="w-1/5 py-[14px]">
                 <img src={logoImg} alt="" />
                </div>
                <div className="w-2/5 py-[24px]">
                <div className="">
                    <ul className='flex'>
                        <li className='font-lato text-[#0D0E43] text-[16px] hover:text-[#FB2E86] duration-300 ease-in-out cursor-pointer px-[18px]'>
                            <Link to="/">Home</Link></li>
                        <li className='font-lato text-[#0D0E43] text-[16px] hover:text-[#FB2E86] duration-300 ease-in-out cursor-pointer px-[18px]'><Link to="/shop">Pages</Link></li>
                        <li className='font-lato text-[#0D0E43] text-[16px] hover:text-[#FB2E86] duration-300 ease-in-out cursor-pointer px-[18px]'>Products</li>
                        <li className='font-lato text-[#0D0E43] text-[16px] hover:text-[#FB2E86] duration-300 ease-in-out cursor-pointer px-[18px]'>Blog</li>
                        <li className='font-lato text-[#0D0E43] text-[16px] hover:text-[#FB2E86] duration-300 ease-in-out cursor-pointer px-[18px]'>Shop</li>
                        <li className='font-lato text-[#0D0E43] text-[16px] hover:text-[#FB2E86] duration-300 ease-in-out cursor-pointer px-[18px]'>Contact</li>
                    </ul>
                </div>

                </div>
                <div className="w-2/5 flex justify-end py-[14px] relative">
                <div className="">
                <input type="search" placeholder='' className='w-full py-[12px] px-[60px] outline-none bg-[#D9D9D9]'/>
                </div>
                <div className="w-[10%] bg-[#FB2E86]">

                <IoSearch className="text-[#fff] text-[25px] absolute top-[50%] right-[14px] translate-y-[-50%]"/>
                </div>
                
                </div>
                
            </Flex>
        </Container>
    </section>
  )
}

export default Navbar