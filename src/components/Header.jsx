import React from 'react'
import Container from './Container';
import Flex from './Flex'
import { FaRegEnvelope } from "react-icons/fa";
import { MdAddCall } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { GoPerson } from "react-icons/go";
import { CiHeart } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";


const Header = () => {
  return (
    <section className='bg-[#7E33E0] text-[#F1F1F1]'>
        <Container>
             <Flex className="py-[14px] font-jos text-[16px]">
                <div className="w-1/2 flex">
                <div className="flex pr-[36px] items-center">
                <FaRegEnvelope/>
                    <h2 className='px-[12px]'>mhhasanul@gmail.com</h2>
                </div>
                <div className="flex px-[36px] items-center">
                <MdAddCall/>
                    <h2 className='px-[12px]'>(12345)67890</h2>
                </div>
                </div>
                <div className="w-1/2 flex justify-end">
                <div className="flex px-[17px] items-center">
                <h3>English</h3>
                    <IoIosArrowDown/>
                    
                </div>
                <div className="flex px-[17px] items-center">
                <h2>USD</h2>
                    <IoIosArrowDown/>
                    
                </div>
                <div className="flex px-[17px] items-center">
                <h2>Login</h2>
                   <GoPerson/>
                    
                </div>
                <div className="flex px-[17px] items-center">
                <h2>Wishlist</h2>
                     <CiHeart/>
                    
                </div>
                <div className=" px-[17px] items-center">
                    <FiShoppingCart/>

                </div>
                </div>
             </Flex>

            
        </Container>
    </section>
  )
}

export default Header