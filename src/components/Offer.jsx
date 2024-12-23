import React from 'react'
import Container from './Container'
import Flex from './Flex'
import offerImg1 from '../assets/offer1.png'
import offerImg2 from '../assets/offer2.png'
import offerImg3 from '../assets/offer3.png'
import offerImg4 from '../assets/offer4.png'

const Offer = () => {
  return (
    <section>
        <Container>
        <div className="text-center pt-[120px] pb-[55px]">
                <h2 className='text-[42px] font-jose text-[#1A0B5B] font-bold'>What Shopex Offer!</h2>
            </div>
            <Flex>

            <div className="w-[24%]">
            <div className="flex justify-center items-center">
                <img src={offerImg1} alt="" />
            </div>
            <div className="text-center pt-[27px]">
                <h2 className='text-[#151875] font-jose text-[22px]'>24/7 Support</h2>
                <p className='font-lato text-[#1A0B5B4D] text[16px] pt-[20px] leading-8 font-[700] '>Lorem ipsum dolor sit amet,</p>
                <p className='font-lato text-[#1A0B5B4D] text[16px] leading-8 font-[700]'> consectetur adipiscing elit.</p>
                <p className='font-lato text-[#1A0B5B4D] text[16px] leading-8 font-[700]'>Massa purus gravida.</p>
            </div>
           </div>

           <div className="w-[24%]">
            <div className="flex justify-center items-center">
                <img src={offerImg2} alt="" />
            </div>
            <div className="text-center pt-[27px]">
                <h2 className='text-[#151875] font-jose text-[22px]'>24/7 Support</h2>
                <p className='font-lato text-[#1A0B5B4D] text[16px] pt-[20px] leading-8 font-[700] '>Lorem ipsum dolor sit amet,</p>
                <p className='font-lato text-[#1A0B5B4D] text[16px] leading-8 font-[700]'> consectetur adipiscing elit.</p>
                <p className='font-lato text-[#1A0B5B4D] text[16px] leading-8 font-[700]'>Massa purus gravida.</p>
            </div>
           </div>

           <div className="w-[24%]">
            <div className="flex justify-center items-center">
                <img src={offerImg3} alt="" />
            </div>
            <div className="text-center pt-[27px]">
                <h2 className='text-[#151875] font-jose text-[22px]'>24/7 Support</h2>
                <p className='font-lato text-[#1A0B5B4D] text[16px] pt-[20px] leading-8 font-[700] '>Lorem ipsum dolor sit amet,</p>
                <p className='font-lato text-[#1A0B5B4D] text[16px] leading-8 font-[700]'> consectetur adipiscing elit.</p>
                <p className='font-lato text-[#1A0B5B4D] text[16px] leading-8 font-[700]'>Massa purus gravida.</p>
            </div>
           </div>

           <div className="w-[24%]">
            <div className="flex justify-center items-center">
                <img src={offerImg4} alt="" />
            </div>
            <div className="text-center pt-[27px]">
                <h2 className='text-[#151875] font-jose text-[22px]'>24/7 Support</h2>
                <p className='font-lato text-[#1A0B5B4D] text[16px] pt-[20px] leading-8 font-[700] '>Lorem ipsum dolor sit amet,</p>
                <p className='font-lato text-[#1A0B5B4D] text[16px] leading-8 font-[700]'> consectetur adipiscing elit.</p>
                <p className='font-lato text-[#1A0B5B4D] text[16px] leading-8 font-[700]'>Massa purus gravida.</p>
            </div>
           </div>

            </Flex>
        </Container>
    </section>
  )
}

export default Offer