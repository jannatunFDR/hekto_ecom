import React from 'react'
import Container from './Container';
import Flex from './Flex';
import blogImg1 from '../assets/blog01.png'
import blogImg2 from '../assets/blog02.png'
import blogImg3 from '../assets/blog03.png'
import { FaPenNib } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";

const Blog = () => {
  return (
    <section className='pl-7'>
       <Container>
       <div className="text-center pt-[120px] pb-[48px]">
                <h2 className='text-[42px] font-jose text-[#1A0B5B] font-bold'>Leatest Blog</h2>
            </div>
        <Flex className="flex justify-between items-center">
            <div className="w-1/3">
                <div className="">
                    <img src={blogImg1} alt="" className='rounded-md' />

                </div>
                <div className="pl-[10px] pt-[20px]">
                    <div className="flex gap-x-[16px] items-center ">
                    <h3 className='text-[#151875] font-jose text-[14px]'><FaPenNib className='inline-block text-[#FB2E86]'/>SaberAli</h3>
                    <h2 className='text-[#151875] font-jose text-[14px] gap-x-4'><SlCalender className='inline-block text-[#FFA454]'/>
                    21 August,2020</h2>
                    </div>

                    <h2 className='hover:text-[#FB2E86] text-[#151875] text-[18px] font-jose pt-[30px] pb-[17px] font-bold duration-300 ease-in-out cursor-pointer'>Top essential trends in 2021</h2>
                    <p className='text-[#72718F] text-[16px] font-sans'>More off this less hello samlande lied much</p>
                    <p className='text-[#72718F] text-[16px] font-sans'>over tightly circa horse taped mightly</p>

                    <h2 className='text-[#151875] text-[16px] font-sans pt-[14px] underline cursor-pointer hover:text-[#FB2E86] duration-300 ease-in-out'>Read More</h2>
                </div>
            </div>
            <div className="w-1/3">
                <div className="">
                    <img src={blogImg2} alt="" className='rounded-md' />

                </div>
                <div className="pl-[10px] pt-[20px]">
                    <div className="flex gap-x-[16px] items-center">
                    <h3 className='text-[#151875] font-jose text-[14px]'><FaPenNib className='inline-block text-[#FB2E86]'/>SaberAli</h3>
                    <h2 className='text-[#151875] font-jose text-[14px] gap-x-4'><SlCalender className='inline-block text-[#FFA454]'/>
                    21 August,2020</h2>
                    </div>

                    <h2 className='hover:text-[#FB2E86] text-[#151875] text-[18px] font-jose pt-[30px] pb-[17px] font-bold duration-300 ease-in-out cursor-pointer'>Top essential trends in 2021</h2>
                    <p className='text-[#72718F] text-[16px] font-sans'>More off this less hello samlande lied much</p>
                    <p className='text-[#72718F] text-[16px] font-sans'>over tightly circa horse taped mightly</p>

                    <h2 className='text-[#151875] text-[16px] font-sans pt-[14px] underline cursor-pointer hover:text-[#FB2E86] duration-300 ease-in-out'>Read More</h2>
                </div>
            </div>
            <div className="w-1/3">
                <div className="">
                    <img src={blogImg3} alt="" className='rounded-md' />

                </div>
                <div className="pl-[10px] pt-[20px]">
                    <div className="flex gap-x-[16px] items-center">
                    <h3 className='text-[#151875] font-jose text-[14px]'><FaPenNib className='inline-block text-[#FB2E86]'/>SaberAli</h3>
                    <h2 className='text-[#151875] font-jose text-[14px] gap-x-4'><SlCalender className='inline-block text-[#FFA454]'/>
                    21 August,2020</h2>
                    </div>

                    <h2 className='hover:text-[#FB2E86] text-[#151875] text-[18px] font-jose pt-[30px] pb-[17px] font-bold duration-300 ease-in-out cursor-pointer'>Top essential trends in 2021</h2>
                    <p className='text-[#72718F] text-[16px] font-sans'>More off this less hello samlande lied much</p>
                    <p className='text-[#72718F] text-[16px] font-sans'>over tightly circa horse taped mightly</p>

                    <h2 className='text-[#151875] text-[16px] font-sans pt-[14px] underline cursor-pointer hover:text-[#FB2E86] duration-300 ease-in-out '>Read More</h2>
                </div>
            </div>

        </Flex>
       </Container>
    </section>
  )
}

export default Blog